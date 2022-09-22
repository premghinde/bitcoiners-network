<?php

namespace App\Http\Controllers\Frontend\Transaction;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDepositRequest;
use App\Services\TransactionService;
use Illuminate\Http\Response;

class DepositController extends Controller
{
    public function __construct(private TransactionService $transactionService)
    {
    }

    public function index()
    {
        return view('transaction.deposit.index');
    }

    public function store(StoreDepositRequest $request)
    {
        $invoice = $this->transactionService->createInvoice($request->amount);

        return response()->json($invoice->getData(), Response::HTTP_OK);
    }

    public function show()
    {
        return view('transaction.deposit.show');
    }
}
