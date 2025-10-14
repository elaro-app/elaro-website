#!/usr/bin/env node

/**
 * Simple build script to inject environment variables into HTML files
 * Usage: node build.js
 */

const fs = require('fs');
const path = require('path');

// Load environment variables from .env file
require('dotenv').config();

// Read the support.html file
const supportHtmlPath = path.join(__dirname, 'support.html');
let supportHtml = fs.readFileSync(supportHtmlPath, 'utf8');

// Replace placeholders with actual environment variables
const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

supportHtml = supportHtml.replace('YOUR_SUPABASE_URL', supabaseUrl);
supportHtml = supportHtml.replace('YOUR_SUPABASE_ANON_KEY', supabaseKey);

// Write the updated file
fs.writeFileSync(supportHtmlPath, supportHtml);

console.log('✅ Environment variables injected into support.html');
console.log('🔗 Supabase URL:', supabaseUrl ? '✓ Set' : '❌ Missing');
console.log('🔑 Supabase Key:', supabaseKey ? '✓ Set' : '❌ Missing');
