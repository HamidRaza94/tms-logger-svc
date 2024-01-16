import { Schema, SchemaDefinition, SchemaOptions } from 'mongoose';

class VersionableSchema extends Schema {
	constructor(baseSchema: SchemaDefinition, baseOptions: SchemaOptions) {
		const versionableSchema: SchemaDefinition = {
			_id: {
				type: String,
				required: true,
			},

			createdAt: {
				type: Date,
				default: new Date(),
			},

			updatedAt: {
				type: Date,
				required: false,
			},

			deletedAt: {
				type: Date,
				required: false,
			},
		};

		const versionableOptions: SchemaOptions = {
			versionKey: false,
		};

		const schema: SchemaDefinition = Object.assign(baseSchema, versionableSchema);
		const options: SchemaOptions = Object.assign(baseOptions, versionableOptions);
		super(schema, options);
	}
}

export default VersionableSchema;
