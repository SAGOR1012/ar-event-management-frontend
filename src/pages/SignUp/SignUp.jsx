import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };
  return (
    <div>
      <div className='min-h-[95vh] bg-gradient-to-br from-gray-100 to-gray-200 flex  items-center justify-center  p-4'>
        <div className='bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full flex flex-row-reverse max-h-[80vh]'>
          {/* Left Panel - Dark Green */}
          <div className='hidden lg:flex lg:w-3/5 bg-gradient-to-br from-emerald-950 to-emerald-900 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-10'>
              <div
                className='absolute inset-0'
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)',
                }}></div>
            </div>

            <div className='relative z-10 flex flex-col justify-center px-16 py-12 text-white'>
              <p className='text-emerald-300 text-sm font-medium tracking-widest mb-4'>
                JOIN THE COMMUNITY
              </p>

              <h1 className='text-5xl font-bold leading-tight mb-6'>
                Start Your
                <br />
                Journey Today.
              </h1>

              <p className='text-emerald-200 text-lg leading-relaxed max-w-md mb-8'>
                Join thousands of event enthusiasts and discover amazing
                experiences. Create your account and unlock exclusive access to
                premium events.
              </p>

              <div className='flex items-center gap-4'>
                <div className='flex -space-x-3'>
                  <img
                    src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
                    alt='Curator 1'
                    className='w-10 h-10 rounded-full border-2 border-emerald-900 object-cover'
                  />
                  <img
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
                    alt='Curator 2'
                    className='w-10 h-10 rounded-full border-2 border-emerald-900 object-cover'
                  />
                  <img
                    src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
                    alt='Curator 3'
                    className='w-10 h-10 rounded-full border-2 border-emerald-900 object-cover'
                  />
                </div>
                <span className='text-emerald-100 font-medium'>
                  12k+ Customers involve with us.
                </span>
              </div>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className='w-full lg:w-2/5 p-12 flex flex-col justify-center'>
            {/* Logo */}
            <div className='mb-2'>
              <h2 className='text-2xl font-bold text-emerald-950 tracking-wide'>
                AR CONVENTION
              </h2>
              <div className='w-12 h-1 bg-amber-800 mt-2 rounded-full'></div>
            </div>
            {/* Welcome Text */}
            <div className='mb-8'>
              <h3 className='text-3xl font-semibold text-gray-900 mb-2'>
                Create Your Account
              </h3>
              <p className='text-gray-500'>
                Join us and start discovering amazing events.
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className='space-y-3 mb-6'>
              <button
                type='button'
                className='w-full flex items-center justify-center gap-3 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200 font-medium text-gray-700'>
                <svg
                  className='w-5 h-5'
                  viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  />
                  <path
                    fill='currentColor'
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  />
                  <path
                    fill='currentColor'
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  />
                  <path
                    fill='currentColor'
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  />
                </svg>
                Google
              </button>
            </div>

            {/* Divider */}
            <div className='relative mb-6'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-200'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-4 bg-white text-gray-500'>
                  OR VIA EMAIL
                </span>
              </div>
            </div>

            {/* Login Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='space-y-5'>
              {/* Full Name Field */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold text-gray-700 mb-2'>
                  FULL NAME
                </label>
                <input
                  id='name'
                  type='text'
                  placeholder='John Doe'
                  className={`w-full px-4 py-3 border ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition-all duration-200`}
                  {...register('name', {
                    required: 'Full name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  })}
                />
                {errors.name && (
                  <p className='mt-1 text-sm text-red-500'>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold text-gray-700 mb-2'>
                  EMAIL ADDRESS
                </label>
                <input
                  id='email'
                  type='email'
                  placeholder='you@example.com'
                  className={`w-full px-4 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition-all duration-200`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className='mt-1 text-sm text-red-500'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor='password'
                  className='block text-sm font-semibold text-gray-700 mb-2'>
                  PASSWORD
                </label>
                <input
                  id='password'
                  type='password'
                  placeholder='••••••••'
                  className={`w-full px-4 py-3 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition-all duration-200`}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                />
                {errors.password && (
                  <p className='mt-1 text-sm text-red-500'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password Field */}
              {/* <div>
                <label
                  htmlFor='confirmPassword'
                  className='block text-sm font-semibold text-gray-700 mb-2'>
                  CONFIRM PASSWORD
                </label>
                <input
                  id='confirmPassword'
                  type='password'
                  placeholder='••••••••'
                  className={`w-full px-4 py-3 border ${
                    errors.confirmPassword
                      ? 'border-red-500'
                      : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition-all duration-200`}
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                  })}
                />
                {errors.confirmPassword && (
                  <p className='mt-1 text-sm text-red-500'>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div> */}

              {/* Sign Up Button */}
              <button
                type='submit'
                className='w-full py-4 bg-emerald-950 hover:bg-emerald-900 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl'>
                Create Account
              </button>
            </form>

            {/* Sign In Link */}
            <p className='mt-8 text-center text-gray-600'>
              Already have an account?{' '}
              <Link
                to='/login'
                className='font-semibold text-gray-900 hover:text-emerald-900 transition-colors'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
