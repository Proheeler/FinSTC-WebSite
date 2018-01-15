        $('#link').click(function () {
            var src = 'https://www.google.com/maps/embed/v1/place?q=%D0%91%D0%A6%20%D0%92%D0%B0%D0%BD%D1%82&key=AIzaSyCWQjoGLUA9NUqZrT9adrxENkvrtWleSyc';
            $('#myModal').modal('show');
            <!-- $('#myModal iframe').attr('src', src); -->
        });

        $('#myModal button').click(function () {
			$('#myModal').modal('hide');
            <!-- $('#myModal iframe').removeAttr('src'); -->
        });