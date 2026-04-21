import { useState, useMemo } from 'react';
import { Expense } from '../types';
import { Plus, Trash2, Wallet, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState<'MNT' | 'USD'>('MNT');
  const [category, setCategory] = useState('Food');

  const addExpense = () => {
    if (!description || !amount) return;
    const newExpense: Expense = {
      id: Math.random().toString(36).substr(2, 9),
      description,
      amount: parseFloat(amount),
      currency,
      category,
      date: new Date().toLocaleDateString()
    };
    setExpenses([newExpense, ...expenses]);
    setDescription('');
    setAmount('');
  };

  const removeExpense = (id: string) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const totals = useMemo(() => {
    const mnt = expenses.filter(e => e.currency === 'MNT').reduce((acc, curr) => acc + curr.amount, 0);
    const usd = expenses.filter(e => e.currency === 'USD').reduce((acc, curr) => acc + curr.amount, 0);
    return { mnt, usd };
  }, [expenses]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-bold mb-2">Expense Tracker</h1>
        <p className="text-nomad-ink/60 max-w-lg">
          Track your spending in the desert. Manage your budget between Mongolian Tögrög (MNT) and US Dollars.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="nomad-card bg-nomad-sky text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-white/10 rounded-2xl">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Total MNT Spend</p>
              <h2 className="text-4xl font-bold font-serif">{totals.mnt.toLocaleString()} ₮</h2>
            </div>
          </div>
        </div>

        <div className="nomad-card bg-nomad-fire text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-white/10 rounded-2xl">
              <DollarSign className="w-8 h-8" />
            </div>
            <div>
              <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">Total USD Spend</p>
              <h2 className="text-4xl font-bold font-serif">$ {totals.usd.toFixed(2)}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="nomad-card bg-white border border-nomad-sky/10 p-10">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <Plus className="w-6 h-6 text-nomad-sky" />
          Add New Expense
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold text-nomad-ink/40 tracking-widest">Description</label>
            <input 
              type="text" 
              placeholder="e.g. Ger Camp Stay" 
              className="nomad-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold text-nomad-ink/40 tracking-widest">Amount</label>
            <input 
              type="number" 
              placeholder="0.00" 
              className="nomad-input"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {amount && (
              <p className="text-[10px] font-bold text-nomad-sky/60 ml-2">
                ≈ {currency === 'MNT' ? `$${(parseFloat(amount) / 3450).toFixed(2)}` : `${(parseFloat(amount) * 3450).toLocaleString()} ₮`}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase font-bold text-nomad-ink/40 tracking-widest">Currency</label>
            <select 
              className="nomad-input appearance-none bg-transparent"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as 'MNT' | 'USD')}
            >
              <option value="MNT">MNT (₮)</option>
              <option value="USD">USD ($)</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
             <label className="text-[10px] uppercase font-bold text-transparent md:block hidden">Action</label>
             <button 
               onClick={addExpense}
               className="nomad-btn-primary py-4 h-[57px] shadow-nomad-sky/10"
             >
               Add Entry
             </button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold font-serif text-nomad-steppe">Recent Expenses</h3>
        {expenses.length === 0 ? (
          <div className="text-center py-24 bg-nomad-white border border-dashed border-nomad-sky/10 rounded-[40px] shadow-inner">
            <div className="w-20 h-20 bg-nomad-sky/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet className="w-10 h-10 text-nomad-sky opacity-20" />
            </div>
            <p className="text-nomad-ink/40 italic text-xl">Your wallet is empty. Start tracking now.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {expenses.map((expense) => (
              <div key={expense.id} className="nomad-card p-6 flex items-center justify-between group">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-nomad-sand rounded-[24px] flex items-center justify-center font-black text-2xl text-nomad-sky group-hover:bg-nomad-sky group-hover:text-white transition-all shadow-sm">
                    {expense.description[0].toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-nomad-steppe leading-none mb-1">{expense.description}</h4>
                    <p className="text-xs text-nomad-ink/40 font-bold uppercase tracking-widest">Recorded on {expense.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="text-right">
                    <p className="font-bold text-3xl font-serif text-nomad-steppe">
                      {expense.currency === 'MNT' ? '' : '$'}
                      {expense.amount.toLocaleString()}
                      {expense.currency === 'MNT' ? ' ₮' : ''}
                    </p>
                    <span className="nomad-badge">{expense.currency}</span>
                  </div>
                  <button 
                    onClick={() => removeExpense(expense.id)}
                    className="p-3 text-red-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-50 hover:text-red-600 rounded-2xl shadow-sm"
                  >
                    <Trash2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
