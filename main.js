const workouts = {

PUSH:[

{
name:"Chest Press Machine",
sets:"4 × 10",
image:"https://i.ytimg.com/vi/sqNwDkUU_Ps/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=sqNwDkUU_Ps"
},

{
name:"Incline Dumbbell Press",
sets:"4 × 12",
image:"https://i.ytimg.com/vi/8iPEnn-ltC8/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=8iPEnn-ltC8"
},

{
name:"Machine Chest Fly",
sets:"3 × 15",
image:"https://i.ytimg.com/vi/eozdVDA78K0/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=eozdVDA78K0"
},

{
name:"Cable Chest Fly",
sets:"3 × 15",
image:"https://i.ytimg.com/vi/0G2_XV7slIg/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=0G2_XV7slIg"
},

{
name:"Shoulder Press",
sets:"4 × 10",
image:"https://i.ytimg.com/vi/Wqq43dKW1TU/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=Wqq43dKW1TU"
},

{
name:"Lateral Raise",
sets:"4 × 15",
image:"https://i.ytimg.com/vi/3VcKaXpzqRo/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=3VcKaXpzqRo"
},

{
name:"Tricep Pushdown",
sets:"4 × 12",
image:"https://i.ytimg.com/vi/2-LAMcpzODU/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=2-LAMcpzODU"
},

{
name:"Overhead Tricep Extension",
sets:"3 × 12",
image:"https://i.ytimg.com/vi/YbX7Wd8jQ-Q/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=YbX7Wd8jQ-Q"
}

],

PULL:[

{
name:"Lat Pulldown",
sets:"4 × 12",
image:"https://i.ytimg.com/vi/CAwf7n6Luuc/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=CAwf7n6Luuc"
},

{
name:"Close Grip Pulldown",
sets:"4 × 12",
image:"https://i.ytimg.com/vi/ao8T7SmNu6Q/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=ao8T7SmNu6Q"
},

{
name:"Seated Cable Row",
sets:"4 × 12",
image:"https://i.ytimg.com/vi/GZbfZ033f74/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=GZbfZ033f74"
},

{
name:"Machine Row",
sets:"3 × 10",
image:"https://i.ytimg.com/vi/kBWAon7ItDw/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=kBWAon7ItDw"
},

{
name:"Face Pull",
sets:"4 × 15",
image:"https://i.ytimg.com/vi/rep-qVOkqgk/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=rep-qVOkqgk"
},

{
name:"Dumbbell Curl",
sets:"4 × 12",
image:"https://i.ytimg.com/vi/ykJmrZ5v0Oo/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=ykJmrZ5v0Oo"
},

{
name:"Hammer Curl",
sets:"3 × 12",
image:"https://i.ytimg.com/vi/zC3nLlEvin4/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=zC3nLlEvin4"
},

{
name:"Preacher Curl",
sets:"3 × 12",
image:"https://i.ytimg.com/vi/av7-8igSXTs/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=av7-8igSXTs"
}

],

LEGS:[

{
name:"Smith Machine Squat",
sets:"4 × 10",
image:"https://i.ytimg.com/vi/42bFodPahBU/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=42bFodPahBU"
},

{
name:"Leg Press",
sets:"4 × 12",
image:"https://i.ytimg.com/vi/IZxyjW7MPJQ/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=IZxyjW7MPJQ"
},

{
name:"Romanian Deadlift",
sets:"4 × 12",
image:"https://i.ytimg.com/vi/2SHsk9AzdjA/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=2SHsk9AzdjA"
},

{
name:"Leg Extension",
sets:"4 × 15",
image:"https://i.ytimg.com/vi/YyvSfVjQeL0/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=YyvSfVjQeL0"
},

{
name:"Leg Curl",
sets:"4 × 15",
image:"https://i.ytimg.com/vi/1Tq3QdYUuHs/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=1Tq3QdYUuHs"
},

{
name:"Walking Lunges",
sets:"3 × 20 Steps",
image:"https://i.ytimg.com/vi/L8fvypPrzzs/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=L8fvypPrzzs"
},

{
name:"Standing Calf Raise",
sets:"5 × 20",
image:"https://i.ytimg.com/vi/-M4-G8p8fmc/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=-M4-G8p8fmc"
},

{
name:"Incline Walk",
sets:"20 Minutes",
image:"https://i.ytimg.com/vi/cb4P4W7s0Ew/maxresdefault.jpg",
video:"https://www.youtube.com/watch?v=cb4P4W7s0Ew"
}

]

};

function saveExerciseWeight(id){

const input =
document.getElementById(id);

const value = Number(input.value);
if (!input.value.trim() || !Number.isFinite(value) || value < 0) {
  alert("Please enter a valid weight"); return;
}
const history = getExerciseHistory();
if (!history[id]) history[id] = [];
history[id].push({date: new Date().toISOString(), weight: value});
localStorage.setItem("exerciseWeightHistory", JSON.stringify(history));
localStorage.setItem(id, String(value)); // Preserve legacy last-weight storage
renderExerciseHistory(id);
alert("✅ Weight saved to history");

}

function getExerciseHistory(){
  try {
    const data = JSON.parse(localStorage.getItem("exerciseWeightHistory") || "{}");
    return data && typeof data === "object" && !Array.isArray(data) ? data : {};
  } catch(e) { return {}; }
}

function renderExerciseHistory(id){
  const el = document.getElementById("history-" + id);
  if (!el) return;
  const entries = getExerciseHistory()[id] || [];
  el.replaceChildren();
  if (!entries.length) { el.textContent = "No saved sessions yet"; return; }
  const title = document.createElement("strong");
  title.textContent = "Previous sessions (kg):";
  el.appendChild(title);
  entries.map((item, index) => ({item, index})).slice(-8).reverse().forEach(({item, index}) => {
    const row = document.createElement("div");
    row.textContent = new Date(item.date).toLocaleString() + " — " + item.weight + " kg";
    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "🗑️ Delete";
    deleteButton.className = "delete-weight-btn";
    deleteButton.addEventListener("click", () => deleteExerciseSession(id, index));
    row.appendChild(document.createTextNode("  "));
    row.appendChild(deleteButton);
    el.appendChild(row);
  });
}

function deleteExerciseSession(id, index) {
  const history = getExerciseHistory();
  const entries = history[id] || [];
  if (index < 0 || index >= entries.length) return;
  if (!confirm("Delete this saved session?")) return;
  entries.splice(index, 1);
  if (entries.length) {
    history[id] = entries;
    localStorage.setItem(id, String(entries[entries.length - 1].weight));
  } else {
    delete history[id];
    localStorage.removeItem(id);
  }
  localStorage.setItem("exerciseWeightHistory", JSON.stringify(history));
  const field = document.getElementById(id);
  if (field) field.value = entries.length ? entries[entries.length - 1].weight : "";
  renderExerciseHistory(id);
}

function clearCurrentWeight(id) {
  const field = document.getElementById(id);
  if (!field) return;
  field.value = "";
  // Only clears the input; saved history stays intact.
}


function loadExerciseWeights(){

Object.entries(workouts)
.forEach(([day, exercises])=>{

exercises.forEach(ex=>{

const id =
`${day}-${ex.name}`;

const saved =
localStorage.getItem(id);

const history = getExerciseHistory()[id] || [];
const latest = history.length ? history[history.length - 1].weight : saved;
const field = document.getElementById(id);
if (field && latest !== null && latest !== undefined) field.value = latest;
renderExerciseHistory(id);

});

});

}

function renderWorkouts(){
const container =
document.getElementById(
"workoutsContainer"
);

container.innerHTML = "";

Object.entries(workouts)
.forEach(([day, exercises])=>{

container.innerHTML +=
`<div class="workout-day">

<div class="workout-title">
${day} DAY
</div>

${exercises.map(ex=>`

<div class="workout-card">

<img src="${ex.image}">

<div class="workout-content">

<h3>${ex.name}</h3>

<p>${ex.sets}</p>

<input
class="exercise-weight"
id="${day}-${ex.name}"
type="number" min="0" step="0.5" inputmode="decimal"
placeholder="Weight Used (kg)">
<div class="exercise-history" id="history-${day}-${ex.name}"></div>

<button
onclick="saveExerciseWeight(
'${day}-${ex.name}'
)"
class="video-btn"
style="margin-top:10px;">
💾 Save Weight
</button>
<a
class="video-btn"
target="_blank"
href="${ex.video}">
▶ Watch Exercise
</a>

</div>

</div>

`).join("")}

</div>`;

});
loadExerciseWeights();
}

let logs =
JSON.parse(
localStorage.getItem("logs")
) || [];

function saveLog(){

const entry = {

date:
document.getElementById("date").value,

weight:
document.getElementById("weight").value,

steps:
document.getElementById("steps").value,

protein:
document.getElementById("protein").value,

notes:
document.getElementById("notes").value

};

logs.push(entry);

localStorage.setItem(
"logs",
JSON.stringify(logs)
);

renderLogs();

renderChart();

alert("Saved Successfully");

}

function renderLogs(){

const container =
document.getElementById("logs");

container.innerHTML = "";

logs.forEach((log,index)=>{

container.innerHTML += `

<div class="log">

📅 ${log.date}
<br><br>

⚖️ ${log.weight} kg
<br>

👣 ${log.steps} steps
<br>

🍗 ${log.protein}g protein
<br><br>

📝 ${log.notes}

<br><br>

<button
onclick="deleteLog(${index})">
🗑️ Delete Log
</button>

</div>

`;

});

}

function deleteLog(index){

logs.splice(index,1);

localStorage.setItem(
"logs",
JSON.stringify(logs)
);

renderLogs();

renderChart();

}

function calculateBMI(){

const h =
document.getElementById(
"bmiHeight"
).value / 100;

const w =
document.getElementById(
"bmiWeight"
).value;

const bmi =
(w / (h * h)).toFixed(1);

document.getElementById(
"bmiResult"
).innerText =
"BMI: " + bmi;

}

function exportCSV(){

let csv =
"Date,Weight,Steps,Protein,Notes\n";

logs.forEach(log=>{

csv +=
`${log.date},
${log.weight},
${log.steps},
${log.protein},
${log.notes}\n`;

});

const blob =
new Blob([csv],{
type:"text/csv"
});

const a =
document.createElement("a");

a.href =
URL.createObjectURL(blob);

a.download =
"gym_progress.csv";

a.click();

}

let chart;

function renderChart(){

const ctx =
document.getElementById(
"weightChart"
);

if(chart){
chart.destroy();
}

chart =
new Chart(ctx,{

type:"line",

data:{

labels:
logs.map(log=>log.date),

datasets:[{

label:"Weight Progress",

data:
logs.map(log=>log.weight),

borderWidth:3

}]

}

});

}

renderWorkouts();

renderLogs();

renderChart();  
let time = 90;

let timerInterval;

function setTimer(seconds){

time = seconds;

document.getElementById(
"timer"
).innerText = time;

}

function startTimer(){

clearInterval(timerInterval);

timerInterval = setInterval(()=>{

if(time > 0){

time--;

document.getElementById(
"timer"
).innerText = time;

}

},1000);

}

function resetTimer(){

clearInterval(timerInterval);

time = 90;

document.getElementById(
"timer"
).innerText = time;

}
function exportAllData(){
  const backup = {
    exportedAt: new Date().toISOString(),
    exerciseWeightHistory: getExerciseHistory(),
    logs: JSON.parse(localStorage.getItem("logs") || "[]"),
    legacyExerciseWeights: {}
  };
  Object.entries(workouts).forEach(([day, exercises]) => exercises.forEach(ex => {
    const id = `${day}-${ex.name}`;
    const value = localStorage.getItem(id);
    if (value !== null) backup.legacyExerciseWeights[id] = value;
  }));
  const blob = new Blob([JSON.stringify(backup,null,2)], {type:"application/json"});
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "gym-tracker-backup-" + new Date().toISOString().slice(0,10) + ".json";
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}
