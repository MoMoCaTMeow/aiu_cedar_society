#!/bin/bash

# Error handling to ensure folders are restored even if build fails
set -e
trap 'mv src/app/_api src/app/api 2>/dev/null; mv src/app/_admin src/app/\(admin\) 2>/dev/null' EXIT

echo "📦 Preparing for static export..."
# Temporarily rename admin/api folders to exclude them from static build
mv src/app/api src/app/_api
mv src/app/\(admin\) src/app/_admin

echo "🚀 Building..."
npm run build

echo "✅ Build complete! The 'out' directory is ready for deployment."
echo "  (Admin folders have been restored)"
