FROM ghcr.io/l4rm4nd/cve-2025-55182:latest

# Copy entrypoint with fraud service traffic support
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh

ENV FRAUD_SERVICE_URL=""

EXPOSE 3000

ENTRYPOINT ["/app/entrypoint.sh"]
