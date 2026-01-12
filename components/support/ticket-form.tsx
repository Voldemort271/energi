import React from 'react';
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const TicketForm = () => {
	return (
		<FieldSet>
			<FieldGroup className="flex flex-col gap-4">
				<Field className="flex flex-col gap-1">
					<FieldLabel
						htmlFor="name"
						className="font-title text-foreground text-sm font-medium"
					>
						Full name
					</FieldLabel>
					<Input
						id="name"
						autoComplete="off"
						placeholder="e.g., George Mullner"
					/>
				</Field>
				<Field className="flex flex-col gap-1">
					<FieldLabel
						htmlFor="title"
						className="font-title text-foreground text-sm font-medium"
					>
						Title
					</FieldLabel>
					<Input
						id="title"
						autoComplete="off"
						placeholder="e.g., Bug in Preferences section"
					/>
				</Field>
				<Field className="flex flex-col gap-1">
					<FieldLabel
						htmlFor="content"
						className="font-title text-foreground text-sm font-medium"
					>
						Describe your issue here
					</FieldLabel>
					<Textarea id="content" autoComplete="off" />
				</Field>
				<Field orientation="responsive" className="py-2.5">
					<Button
						type="submit"
						className="font-title cursor-pointer bg-linear-60 from-teal-800 via-teal-600 to-amber-600 text-base font-semibold text-zinc-100 opacity-80 transition-all hover:opacity-100"
					>
						Submit
					</Button>
					<Button
						type="button"
						className="text-foreground bg-background hover:bg-background cursor-pointer border border-rose-500/20 transition-all hover:text-base"
					>
						Cancel
					</Button>
				</Field>
			</FieldGroup>
		</FieldSet>
	);
};

export default TicketForm;
