import { Metadata } from "next";
import { fetchCustomerById } from "@/app/lib/data";
import {notFound} from "next/navigation";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import Form from "@/app/ui/customers/edit-form";

export const metadata: Metadata = {
	title: 'Edit Customer',
};

export default async function Page({ params }: { params: { id: string } }) {
	const id = params.id;
	const [customer] = await Promise.all([
		fetchCustomerById(id),
	]);

	if (!customer) {
		notFound();
	}

	return (
		<main>
			<Breadcrumbs
				breadcrumbs={[
					{label: 'Customers', href: '/dashboard/customers' },
					{
						label: 'Edit Customer',
						href: `/dashboard/customers/${id}/edit`,
						active: true,
					},
				]}
			/>
			<Form customer={customer} />
		</main>
	);
}
