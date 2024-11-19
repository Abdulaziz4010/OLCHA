const form = document.getElementById("product-create-form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    fetch("http://localhost:5000/products", {method: "post", body: formData})

    alert("Qo'shildi")

    console.log(formData);
    event.target.reset()
    
})