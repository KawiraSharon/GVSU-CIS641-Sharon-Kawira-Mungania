import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'
import { Button } from '@/components/ui/button';
import { global } from 'styled-jsx/css';
import debit from './debit.jpg'
import Image from 'next/image';
import { Link } from 'lucide-react';

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  return (
  <>
    <section className='d-flex justify-content-center'>
      <div className="my-banks">
        <HeaderBox 
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activites."
        />

        <div className="space-y-4">
          <h2 className="header-2">
            Your cards
          </h2>
          <div className="flex flex-wrap gap-6">
            {accounts && accounts.data.map((a: Account) => (
              <BankCard 
                key={accounts.id}
                account={a}
                userName={loggedIn?.firstName}
              />
            ))}
          </div>
        </div>
        <Button className="button-card" type="button">Add a Card!</Button>
          <Image className='center-container' src={debit} alt="A description of the image" width="500" height="300" />
        
       </div>


    </section>

    
    </>
  )
}

export default MyBanks