package com.pplgym.tracker;
import android.app.Activity;
import android.os.Bundle;
import android.content.Intent;
import android.net.Uri;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.widget.Toast;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;

public class MainActivity extends Activity {
    private WebView view;
    private String pendingCsv;
    private static final int SAVE_CSV = 501;

    public class FileBridge {
        @JavascriptInterface
        public void saveCsv(String csv) {
            runOnUiThread(() -> {
                pendingCsv = csv;
                Intent intent = new Intent(Intent.ACTION_CREATE_DOCUMENT);
                intent.addCategory(Intent.CATEGORY_OPENABLE);
                intent.setType("text/csv");
                intent.putExtra(Intent.EXTRA_TITLE, "ppl-gym-exercises.csv");
                startActivityForResult(intent, SAVE_CSV);
            });
        }
    }

    @Override public void onCreate(Bundle state) {
        super.onCreate(state);
        view = new WebView(this);
        view.setWebViewClient(new WebViewClient());
        view.setWebChromeClient(new WebChromeClient());
        WebSettings s = view.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        view.addJavascriptInterface(new FileBridge(), "GymApp");
        setContentView(view);
        view.loadUrl("file:///android_asset/index.html");
    }

    @Override protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == SAVE_CSV) {
            if (resultCode == RESULT_OK && data != null && data.getData() != null && pendingCsv != null) {
                try (OutputStream out = getContentResolver().openOutputStream(data.getData())) {
                    if (out == null) throw new Exception("Cannot open file");
                    out.write(("\uFEFF" + pendingCsv).getBytes(StandardCharsets.UTF_8));
                    Toast.makeText(this, "CSV saved successfully", Toast.LENGTH_LONG).show();
                } catch (Exception e) {
                    Toast.makeText(this, "Save failed: " + e.getMessage(), Toast.LENGTH_LONG).show();
                }
            }
            pendingCsv = null;
        }
    }

    @Override public void onBackPressed() {
        if (view.canGoBack()) view.goBack();
        else super.onBackPressed();
    }
}
