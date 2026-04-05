#!/bin/sh

# If FRAUD_SERVICE_URL is set, start a background loop calling it
if [ -n "$FRAUD_SERVICE_URL" ]; then
  echo "[traffic] Starting background requests to $FRAUD_SERVICE_URL every 10s"
  (
    sleep 15
    while true; do
      wget -q -O /dev/null "$FRAUD_SERVICE_URL" 2>/dev/null && echo "[traffic] $FRAUD_SERVICE_URL -> OK" || echo "[traffic] $FRAUD_SERVICE_URL -> FAIL"
      sleep 10
    done
  ) &
fi

# Start Next.js
exec npm start
