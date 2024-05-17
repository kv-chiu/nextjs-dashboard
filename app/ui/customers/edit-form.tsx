'use client';

import { CustomerForm } from "@/app/lib/definitions";
import {
	UserCircleIcon,
	EnvelopeIcon,
	CameraIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateCustomer } from "@/app/lib/actions";
import { useFormState } from 'react-dom';

export default function Form({
	customer,
}: {
	customer: CustomerForm;
}) {
	const initialState = { message: null, errors: {} };
	const updateCustomerWithId = updateCustomer.bind(null, customer.id);
	const [state, dispatch] = useFormState(updateCustomerWithId, initialState);

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
							className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
							placeholder="Enter customer name"
							defaultValue={customer.name}
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
						<input
							id="email"
							name="email"
							type="email"
							className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm"
							placeholder="Enter email address"
							defaultValue={customer.email}
							aria-describedby="email-error"
						/>
						<EnvelopeIcon
							className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
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

				{/* Customer Profile Picture */}
				<div className="mb-4">
					<label htmlFor="avatar" className="mb-2 block text-sm font-medium">
						Avatar
					</label>
					<div className="relative mt-2 rounded-md">
						<input
							id="avatar"
							name="avatar"
							type="file"
							className="hidden"
							aria-describedby="avatar-error"
						/>
						<label
							htmlFor="avatar"
							className="flex items-center justify-center w-full rounded-md border border-gray-200 py-2 px-3 text-sm cursor-pointer"
						>
							<CameraIcon className="h-6 w-6 mr-2 text-gray-500"/>
							<span>Upload a picture</span>
						</label>
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
			</div>

			{/* Submit Button */}
			<div className="mt-6 flex justify-end gap-4">
				<Link
					href="/dashboard/customers"
					className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
				>
					Cancel
				</Link>
				<Button type="submit">Edit Invoice</Button>
			</div>
		</form>
	);
}
