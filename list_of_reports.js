var ClickCount = 0;


let toggled = false;


//var listReports = new Array();

//const allreports = JSON.parse(localStorage.getItem("All"));

 function getReports() {

//const allreports = JSON.parse(localStorage.getItem("All"));
//document.getElementById('SetofReports').innerHTML = JSON.stringify(allreports);

const listReports = document.getElementById('SetofReports');
const allreports = JSON.parse(localStorage.getItem("All")) || [];

listReports.innerHTML = "";
       //report.innerHTML = JSON.stringify(allreports[0]);
for (let i = 0; i < allreports.length; i++) {
//      var report = document.createElement("SetofReports");

        const report = document.createElement("div");
        report.innerHTML = JSON.stringify(allreports[i]);
        report.dataset.reportcontent;
        listReports.appendChild(report);
}
}

//console.log(listReports.length);




function showReports(value) {

console.log(value);
document.getElementById("SetofReports").innerHTML = JSON.stringify(value);
}

function clearReports()  {
console.log(listReports);

var  report = allreports;

        report.innerHTML = "";
        listReports.removeChild(report);
}






function toggleReports() {

    clearReports();
    getReports();

}
