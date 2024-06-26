'use client';

import Link from 'next/link';
import {
	UserCircleIcon,
	EnvelopeIcon,
	CameraIcon,
} from '@heroicons/react/24/outline';
import {Button} from '@/app/ui/button';
import {createCustomer} from "@/app/lib/actions";
import {useFormState} from 'react-dom';

export default function Form() {
	const initialState = {message: null, errors: {}};
	const [state, dispatch] = useFormState(createCustomer, initialState);

	return (
		<form action={dispatch}>
			<div className="rounded-md bg-gray-50 p-4 md:p-6">
				{/* Customer Name */}
				<div className="mb-4">
					<label htmlFor="name" className="mb-2 block text-sm font-medium">
						Name
					</label>
					<div className="relative">
						<input
							id="name"
							name="name"
							type="text"
							className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
							placeholder="Enter customer name"
							aria-describedby="name-error"
						/>
						<UserCircleIcon
							className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
					</div>
					<div id="name-error" aria-live="polite" aria-atomic="true">
						{state.errors?.name &&
							state.errors.name.map((error: string) => (
								<p className="mt-2 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>
				</div>

				{/* Customer Email */}
				<div className="mb-4">
					<label htmlFor="email" className="mb-2 block text-sm font-medium">
						Email
					</label>
					<div className="relative mt-2 rounded-md">
						<div className="relative">
							<input
								id="email"
								name="email"
								type="email"
								className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
								placeholder="Enter email address"
								aria-describedby="email-error"
							/>
							<EnvelopeIcon
								className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
						</div>
					</div>
					<div id="email-error" aria-live="polite" aria-atomic="true">
						{state.errors?.email &&
							state.errors.email.map((error: string) => (
								<p className="mt-2 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>
				</div>

				{/* Customer Avatar */}
				<div className="mb-4">
					<label htmlFor="avatar" className="mb-2 block text-sm font-medium">
						Avatar
					</label>
					<div className="relative mt-2 rounded-md">
						<input
							id="avatar"
							name="image_url"
							type="text"
							className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
							placeholder="Enter avatar URL"
							aria-describedby="avatar-error"
						/>
						<CameraIcon
							className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
					</div>
					<div id="avatar-error" aria-live="polite" aria-atomic="true">
						{state.errors?.image_url &&
							state.errors.image_url.map((error: string) => (
								<p className="mt-2 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>
				</div>

				{/* Customer Message */}
				<div id="field-message" aria-live="polite" aria-atomic="true">
					{state.message && (
						<p className="mt-2 text-sm text-red-500">{state.message}</p>
					)}
				</div>
			</div>

			{/* Form Actions */}
			<div className="mt-6 flex justify-end gap-4">
				<Link
					href="/dashboard/customers"
					className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
				>
					Cancel
				</Link>
				<Button type="submit">Create Customer</Button>
			</div>
		</form>
	);
}
