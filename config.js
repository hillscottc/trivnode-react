'use strict';

module.exports = {
  isDeveloping: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL || 'postgres:///triv_db'
};

