
 function newsubmit() {

        const r = document.getElementById('report');

        const selected = document.querySelector('input[name="rules"]:checked');

        const val = selected ? selected.value : null;

        const form = [];
        console.log(val);

        const desc = document.getElementById("other").value;
        console.log(desc);

        const  allResponses = JSON.parse(localStorage.getItem('allResponses')) || [];

        const user = allRepsonses.dataset.author;

        const side = allResponses.dataset.side;

        const reason = allResponses.dataset.reason;

        const reportData = {
        rules: val,
        description: desc,
        timestamp: new Date().toISOString()

        username: user,
        sidetaken: side,
        reasoning: reason
        };

        localStorage.setItem("reports", JSON.stringify(reportData));
        window.location.href= "https://www.cs.umb.edu/~hdeblois/cs410/longproj01/t1-UP/Artifacts/samanthaArtifacts/report_page/report_review.html";


 }
