<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Session;

class ProductController extends Controller
{
    //
    public function newproduct(Request $request)
    {
        $product = new Product;
        $product->name = $request->input('name');
        $product->file_path = $request->file('file_path')->store('products');
        $product->description = $request->input('description');
        $product->price = $request->input('price');
        $product->save();
        return $product;
    }

    public function list()
    {
        return Product::all();
                
    }

    public function destroy($id)
    {
        $result = Product::where('id', $id)->delete();
        if($result){
            return ["result"=> "product has been deleted"];
        } else {
            return ["result"=> "operation failed. Check to see if target exists"];
        }
    }

    public function getProduct($id)
    {
        return Product::findOrFail($id);
    }

    public function search($key)
    {
        return Product::where('name', 'Like', "%$key%")->get();
    }
}
