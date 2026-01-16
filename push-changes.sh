#!/bin/bash

echo "=== Git Push Script ==="
echo "Current directory: $(pwd)"

echo "Adding all files..."
git add . 
echo "Status after add:"
git status --short

echo "Committing changes..."
git commit -m "Implemented add appliance page with modal and animations"

echo "Setting up remote..."
git remote set-url origin https://github.com/Voldemort271/energi.git
git remote -v

echo "Checking current branch..."
git branch

echo "Pushing to GitHub..."
git push -u origin main

echo "=== Push completed! ==="
