import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (!data) return;
    console.log(data);
  };

  return (
    <div className="flex justify-center bg-green-500">
      <div className="max-w-xs bg-white flex flex-col gap-4 sm:w-3/4 w-full">
        <h1 className="text-xl font-bond text-center">Transaction</h1>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <input {...register('title')} type="text" placeholder="Salary, Rent, Utilities" className="form-input" />
            <select {...register('type')} className="form-input">
              <option value="Investment" defaultValue>Investment</option>
              <option value="Saving">Saving</option>
              <option value="Expense">Expense</option>
            </select>
            <input {...register('amount')} type="text" placeholder="Amount" className="form-input" />
            <button className="bg-indigo-500 w-full text-white py-2" type="submit">Add Transaction</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
