"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function AddNewInterview() {
    const [openDialog,setOpenDialog]=useState(false)
    const [JobPosition,setJobPosition]=useState();
    const [JobDesc,setJobDesc]=useState();
    const [JobExperience,setJobExperience]=useState();
  return (
    <div>
        <div className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={()=>setOpenDialog(true)}
        >
            <h2 className='text-lg text-center'>+ Add New</h2>
        </div>
        <Dialog open={openDialog}>
  <DialogContent className='max-w-2xl'>
    <DialogHeader>
      <DialogTitle className='text-2xl'>Tell us more about your job interview</DialogTitle>
      <DialogDescription>
        <form>
        <div>
            <h2>Add details about job position, your skills and years of experience</h2>

            <div className='mt-7 my-3'>
              <label>Job Position/ Role Name</label>
              <Input placeholder="Ex. Full Stack Developer" required 
              onChange
              />
            </div>

            <div className='my-3'>
              <label>Job Description/ Tech Stack in short</label>
              <Textarea placeholder="Ex. React, Angular, NodeJS, MySQL" required />
            </div>

            <div className='my-3'>
              <label>Experience in years</label>
              <Input placeholder="Ex. 5" max="50" type="number" required />
            </div>
        </div>
        <div className='flex gap-5 justify-end'>
            <Button type="button" variant="ghost" onClick={()=>setOpenDialog(false)}>Cancel</Button>
            <Button type="submit">Start Interview</Button>
        </div>
        </form>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
    </div>
    
  )
}

export default AddNewInterview