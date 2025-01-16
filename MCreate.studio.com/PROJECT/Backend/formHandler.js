document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#wf-form-Contact-1-Form").addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = {
            name: document.querySelector("#Name").value,
            phoneNumber: document.querySelector("#Phone-Number").value,
            email: document.querySelector("#Email").value,
            service: document.querySelector("#Service").value,
            budget: document.querySelector("#Budget").value,
            message: document.querySelector("#Message").value,
        };

        try {
            const response = await fetch("http://localhost:3000/submit-form", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            alert(result.message);
        } catch (error) {
            alert("Error submitting form!");
        }
    });
});
