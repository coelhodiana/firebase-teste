import { EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const environment = {
  production: false,
  firebase: {

  },
  api: {

  }
};

const firebaseProviders: EnvironmentProviders = importProvidersFrom([
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideFirestore(() => getFirestore()),
  provideAuth(() => getAuth())
]);

export { firebaseProviders };
