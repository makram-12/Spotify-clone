#!/bin/sh
set -e

cd spotify-backend
npm install --omit=dev
npm start