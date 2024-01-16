import mongoose from 'mongoose';

import Schema from './Schema';
import IModel from './IModel';

const schema: mongoose.Schema = new Schema();

const Model: mongoose.Model<IModel> = mongoose.model<IModel>('log', schema, 'logs');

export default Model;
