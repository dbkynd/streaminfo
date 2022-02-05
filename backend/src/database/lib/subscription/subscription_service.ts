import Subscription, { SubscriptionDoc } from './subscription_model';

function create(
  payload: SubscriptionPayload,
  createdAt?: string,
): SubscriptionDoc {
  const doc = new Subscription({ payload });
  if (createdAt) doc.createdAt = createdAt;
  return doc;
}

function save(doc: SubscriptionDoc): Promise<SubscriptionDoc> {
  return doc.save();
}

async function list(): Promise<SubscriptionDoc[]> {
  return Subscription.find({});
}

export default {
  create,
  save,
  list,
};
