#!/bin/bash

echo "=== Git Push Script ==="
echo "Current directory: $(pwd)"

echo "Checking for merge conflicts..."
if git diff --name-only --diff-filter=U | grep -q .; then
    echo "⚠️  Merge conflicts detected! Please resolve them first."
    git status
    exit 1
fi

echo "Adding all files..."
git add . 
echo "Status after add:"
git status --short

echo "Committing changes..."
git commit -m "Resolved merge conflicts and implemented add appliance page with modal and animations"

echo "Setting up remote..."
git remote set-url origin https://github.com/Voldemort271/energi.git
git remote -v

echo "Checking current branch..."
git branch

echo "Pushing to GitHub..."
git push -u origin main

echo "=== Push completed! ==="
