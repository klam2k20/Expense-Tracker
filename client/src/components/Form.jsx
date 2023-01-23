import React from 'react';
import { useForm } from 'react-hook-form';
import History from './History';
import { useAddTransactionMutation } from '../store/apiSlice';

function Form() {
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      amount: '',
    },
  });
  const [api] = useAddTransactionMutation();

  const onSubmit = async (data) => {
    const formData = { ...data, name: data.name.charAt(0).toUpperCase() + data.name.slice(1) };
    await api(formData).unwrap();
    reset();
  };

  return (
    <div className="flex justify-center py-8">
      <div className="max-w-xs flex flex-col gap-8 sm:w-3/4 w-full px-4">
        <h1 className="text-xl font-bold text-center">Transaction</h1>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 mb-4">
            <input
              {...register('name', { required: 'This field is required!' })}
              className="form-input capitalize"
              type="text"
              placeholder="Salary, Rent, Utilities"
            />
            <span className="form-error-label">{errors.name?.message}</span>
            <select {...register('type')} className="form-input">
              <option value="Investments" defaultValue>Investments</option>
              <option value="Savings">Savings</option>
              <option value="Expenses">Expenses</option>
            </select>
            <input
              {...register('amount', { required: 'This field is required!' })}
              className="form-input"
              type="number"
              placeholder="Amount"
            />
            <span className="form-error-label">{errors.amount?.message}</span>
            <button
              className="bg-indigo-500 w-full text-white py-2"
              type="submit"
            >
              Add Transaction
            </button>
          </div>
        </form>
        <History />
      </div>
    </div>
  );
}

export default Form;
