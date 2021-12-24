<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <table border="1">
    @foreach ($books as $book)
        <tr>
          <td>{{ $book->id }}</td>
          <td>{{ $book->title }}</td>
          <td>{{ $book->insert_timestamp }}</td>
        </tr>
    @endforeach
  </table>
</body>
</html>