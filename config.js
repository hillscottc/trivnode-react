'use strict';

module.exports = {
  isDeveloping: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL || 'postgres:///triv_db',
  ga_id: process.env.GA_ID || '83510105-1'
};

