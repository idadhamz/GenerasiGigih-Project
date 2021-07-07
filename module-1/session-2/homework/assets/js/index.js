alertSubmit = (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    alert(`Berhasil input dengan title "${title}" dan description "${description}"`);
};

document.getElementById("submit").addEventListener("click", alertSubmit);