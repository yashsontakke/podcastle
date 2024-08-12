'use client'
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
});

type FormValues = z.infer<typeof schema>;

function MyForm() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data:  FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => {
          console.log(field.value+ "here"); // D
          return (
            <>
            <label htmlFor="name">Name</label>
            <input id="name" {...field} />
            {errors.name && <p>{errors.name.message}</p>}
          </>
          )
        }}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" {...field} />
            {errors.email && <p>{errors.email.message}</p>}
          </>
        )}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
