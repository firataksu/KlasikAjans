import path from 'path'
import { fileURLToPath } from 'url'

import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Projects } from './collections/Projects'
import { Team } from './collections/Team'
import { ContactMessages } from './collections/ContactMessages'

import { HomePage } from './globals/HomePage'
import { SiteSettings } from './globals/SiteSettings'
import { ServicesPage } from './globals/ServicesPage'
import { ProjectsPage } from './globals/ProjectsPage'
import { AboutPage } from './globals/AboutPage'
import { ContactPage } from './globals/ContactPage'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— Klasik Ajans',
    },
  },
  collections: [
    Users,
    Media,
    Services,
    Projects,
    Team,
    ContactMessages,
  ],
  globals: [
    HomePage,
    SiteSettings,
    ServicesPage,
    ProjectsPage,
    AboutPage,
    ContactPage,
  ],
  editor: lexicalEditor({}),
  db: process.env.DATABASE_URI?.startsWith('postgresql')
    ? postgresAdapter({
        pool: { connectionString: process.env.DATABASE_URI },
      })
    : sqliteAdapter({
        client: {
          url: process.env.DATABASE_URI || 'file:./klasik-ajans.db',
        },
      }),
  secret: process.env.PAYLOAD_SECRET || 'default-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  upload: {
    limits: {
      fileSize: 5_000_000, // 5MB
    },
  },
})
