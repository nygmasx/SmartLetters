import {Head, useForm} from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from "@/Components/InputError.jsx";

export default function Index({auth}) {

    const { data, setData, post, processing, reset, errors } = useForm({
        first_name: '',
        last_name: '',
        degree: '',
        company: '',
        job_title: '',
        advertisement: '',
    });

    const submit = async (e) => {
        e.preventDefault();
        const createResponse = await post(route('letters.generate'));
        reset();
    };
    return(
        <>
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Create a SmartLetter"/>
            <section className="bg-white dark:bg-gray-900 w-full">
                <div
                    className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Nouvelle lettre de
                        motivation</h2>
                    <form onSubmit={submit}>

                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 w-full">
                            <div className="sm:col-span-2">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Poste</label>
                                <input
                                    type="text" name=""
                                    value={data.job_title}
                                    onChange={e => setData('job_title', e.target.value)}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       required=""/>
                                <InputError message={errors.job_title}/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="brand"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                                <input type="text" value={data.first_name} onChange={e => setData('first_name', e.target.value)}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Votre Nom" required=""/>
                                <InputError message={errors.first_name}/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="price"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre
                                    Prénom</label>
                                <input type="text" name="" value={data.last_name}
                                       onChange={e => setData('last_name', e.target.value)}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Votre Prénom" required=""/>
                                <InputError message={errors.last_name}/>
                            </div>
                            <div>
                                <label htmlFor="category"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dernier
                                    diplôme</label>
                                <input type="text" name="" value={data.degree}
                                       onChange={e => setData('degree', e.target.value)}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       required=""/>
                            </div>
                            <div>
                                <label htmlFor="item-weight"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Entreprise
                                    pour laquelle vous postulez</label>
                                <input type="text" name="" value={data.company}
                                       onChange={e => setData('company', e.target.value)}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       required=""/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="description"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Annonce
                                    de poste</label>
                                <textarea name="" rows="8" value={data.advertisement}
                                          onChange={e => setData('advertisement', e.target.value)}
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="Annonce du poste pour lequel vous voulez postulez"></textarea>
                            </div>
                        </div>

                        <button type="submit"
                                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-emerald-800">
                            Créer ma SmartLetter
                        </button>
                    </form>
                </div>
            </section>
        </AuthenticatedLayout>
        </>
    )
}
