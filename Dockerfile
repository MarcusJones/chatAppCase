FROM denoland/deno:alpine-1.36.0

EXPOSE 8000

COPY . .

# Cache dependencies
RUN deno cache main.ts

# No need to check about --allow-all because it's already sandboxed
CMD ["run", "--allow-all", "main.ts"]
