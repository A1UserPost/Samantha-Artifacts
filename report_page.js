function submit() {


        const selected = document.querySelector("input[name='rules']:checked");
        const val = selected ? selected.value : null;


        const desc = document.getElementById("other").value;

        const reportdata = {
        rule: val,
        description: desc,
        time: new Date().toISOString()
        };

        localStorage.setItem("reports", JSON.stringify(reportdata));

 }
