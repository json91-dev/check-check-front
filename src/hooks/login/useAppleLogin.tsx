/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';

/**
 * You'd technically persist this somewhere for later use.
 */
let user: any = null;

/**
 * 현재 사용자의 자격 증명 상태(있는 경우)를 가져오고 완료 시 상태를 업데이트합니다.
 */
async function fetchAndUpdateCredentialState(updateCredentialStateForUser: any) {
  if (user === null) {
    updateCredentialStateForUser('N/A');
  } else {
    const credentialState = await appleAuth.getCredentialStateForUser(user);
    if (credentialState === appleAuth.State.AUTHORIZED) {
      updateCredentialStateForUser('AUTHORIZED');
    } else {
      updateCredentialStateForUser(credentialState);
    }
  }
}

/**
 * 로그인 흐름을 시작합니다.
 */
async function onAppleButtonPress(updateCredentialStateForUser: any) {
  console.warn('Beginning Apple Authentication');

  // start a login request
  try {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    console.log('appleAuthRequestResponse', appleAuthRequestResponse);

    const {
      user: newUser,
      email,
      nonce,
      identityToken,
      realUserStatus /* etc */,
    } = appleAuthRequestResponse;

    user = newUser;

    fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
      updateCredentialStateForUser(`Error: ${error.code}`),
    );

    if (identityToken) {
      // e.g. sign in with Firebase Auth using `nonce` & `identityToken`
      console.log(nonce, identityToken);
    } else {
      // no token - failed sign-in?
    }

    if (realUserStatus === appleAuth.UserStatus.LIKELY_REAL) {
      console.log("I'm a real person!");
    }

    console.warn(`Apple Authentication Completed, ${user}, ${email}`);
  } catch (error: any) {
    if (error.code === appleAuth.Error.CANCELED) {
      console.warn('User canceled Apple Sign in.');
    } else {
      console.error(error);
    }
  }
}

const useAppleLogin = () => {
  const [credentialStateForUser, updateCredentialStateForUser]: any = useState(-1);
  useEffect(() => {
    if (!appleAuth.isSupported) return;

    fetchAndUpdateCredentialState(updateCredentialStateForUser).catch((error: any) =>
      updateCredentialStateForUser(`Error: ${error.code}`),
    );
  }, []);

  useEffect(() => {
    if (!appleAuth.isSupported) return;

    return appleAuth.onCredentialRevoked(async () => {
      console.warn('Credential Revoked');
      fetchAndUpdateCredentialState(updateCredentialStateForUser).catch(error =>
        updateCredentialStateForUser(`Error: ${error.code}`),
      );
    });
  }, []);

  return {
    onAppleButtonPress,
    isSupportedAppleLogin: appleAuth.isSupported,
  }
}

export default useAppleLogin;
