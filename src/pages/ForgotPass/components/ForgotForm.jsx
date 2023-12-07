import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotSchema } from '../../../schemas/forgotSchema';
import Button from '../../../layouts/Button';
import { Link } from 'react-router-dom';

function ForgotForm() {
    const title = "Enviar"
    const { register, handleSubmit, formState: { errors }, reset} = useForm({
      resolver: yupResolver(forgotSchema),
    });

  const onSubmit = (data) => {
    console.log(data);
        alert('Se te envio un email con los pasos para elegir una nueva!');
    reset();
  };

  return (
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-x-4 pt-4 pb-7">
          <p className="text-slate-950 ml-1 font-medium text-sm">Ingresa tu e-mail y te enviaremos los pasos para elegir una nueva.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid w-full pt-4">
          <label htmlFor="email" className="text-slate-950 ml-1 font-medium text-sm">Email</label>
          <input
            type="email"
            className="border border-grey-950 h-10 rounded-xl w-full px-2"
            {...register("email")}
          />
          {errors.email && <p>{errors.email.message}</p>}
          
          <div className="flex gap-x-3 text-sm mt-10">
            <Button type="submit" title={title} />
          </div>
        </form>
      </div>
  );
  
}

export default ForgotForm;