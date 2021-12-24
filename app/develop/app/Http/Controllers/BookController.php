<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    public function index(){

        // booksテーブルのレコードを全て取得
        $data = [
            'books' => Book::all()
        ];

        return view('book.index', $data);

    }
}
