import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// MUI
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>Agrifatto</title>
        <meta name="description" content="Agrifatto MVP" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/leaf.ico" />
      </Head>
      <main className={styles.main}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}          
        >
          <div>
            <Image
              className={styles.logo}
              src="/leaf.ico"
              alt="leaf"
              width={100}
              height={100}
              priority
            />
            <Typography variant="h3">
              Agrifatto
            </Typography>
          </div>
          <div>
            <Stack
              direction="row"
              spacing={2}>
              <Button variant="contained" size="small" color="success">
                  <Link className={styles.btntext} href="/authenticate">Log in</Link>
              </Button>
              <Button variant="contained" size="small" color="success">
                <Link className={styles.btntext} href="/authenticate">Sign up</Link>
              </Button>
            </Stack>
          </div>
        </Stack>
      </main>
    </>
  )
}
