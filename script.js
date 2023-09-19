document.getElementById("clienteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // registro de los datos ingresados
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;

    // para comprobar que los datos se han ingresado, en una tabla mas abajo se muestran los datos del usuario
    var table = document.getElementById("clientesTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    cell1.innerHTML = nombre;
    cell2.innerHTML = apellido;
    cell3.innerHTML = email;
    cell4.innerHTML = telefono;

    // Se borraran el contenido de los campos pero no se eliminara la informacion
    document.getElementById("clienteForm").reset();
});

