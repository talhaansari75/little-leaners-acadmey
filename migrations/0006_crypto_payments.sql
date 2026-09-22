CREATE TABLE IF NOT EXISTS crypto_payment_intents (
  id text PRIMARY KEY,
  user_id text NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
  order_id text NOT NULL,
  product_id text NOT NULL,
  chain_id integer NOT NULL,
  asset_type text NOT NULL CHECK (asset_type IN ('native','erc20')),
  asset_symbol text NOT NULL,
  token_address text,
  amount_atomic text NOT NULL,
  recipient_address text NOT NULL,
  payer_address text,
  tx_hash text UNIQUE,
  status text NOT NULL DEFAULT 'created' CHECK (status IN ('created','submitted','confirming','verified','expired','failed','reorged')),
  confirmations integer NOT NULL DEFAULT 0,
  metadata_json jsonb NOT NULL DEFAULT '{}'::jsonb,
  expires_at timestamptz NOT NULL,
  verified_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, order_id)
);
CREATE INDEX IF NOT EXISTS crypto_payment_intents_user_idx ON crypto_payment_intents(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS crypto_payment_intents_status_idx ON crypto_payment_intents(status, created_at DESC);
