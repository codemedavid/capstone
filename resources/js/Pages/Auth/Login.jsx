import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import { UserIcon, KeyIcon } from "@heroicons/react/outline"; // Importing the icons
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Header from '@/Components/Header';
import { Head, Link, useForm } from '@inertiajs/react';
import Footer from '@/Components/Footer';
export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Header/>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="container w-[100%] flex justify-center items-center h-[80vh]">
            <div className="container w-[90%] flex justify-center items-center h-[50vh]">
                <form onSubmit={submit} className='w-[50%]'>
                    <div>
                        <div className="flex items-center">
                            <UserIcon className="w-6 h-6 text-gray-400 mr-2" /> {/* Icon here */}
                            <InputLabel htmlFor="email" value="Email" />
                        </div>

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <KeyIcon className="w-6 h-6 text-gray-400 mr-2" /> {/* Icon here */}
                            <InputLabel htmlFor="password" value="Password" />
                        </div>

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="block mt-4">
                        <label>                      
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>    
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton className="ml-4" disabled={processing}>
                            Log in
                        </PrimaryButton>
                    </div>
                </form>
                </div>
            </div>

            <Footer />
        </>
    );
}
