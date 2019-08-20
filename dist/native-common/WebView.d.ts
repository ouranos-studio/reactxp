/**
 * WebView.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * A control that allows the display of an independent web page.
 */
import * as React from 'react';
import * as RN from 'react-native';
import { WebView as RNWebView } from 'react-native-webview';
import * as RX from '../common/Interfaces';
export declare class WebView extends React.Component<RX.Types.WebViewProps, RX.Types.Stateless> implements RX.WebView {
    private _mountedComponent;
    render(): JSX.Element;
    private _sandboxToMixedContentMode;
    protected _onMount: (component: RNWebView | null) => void;
    protected _onMessage: (e: RN.NativeSyntheticEvent<import("react-native-webview/lib/WebViewTypes").WebViewMessage>) => void;
    private _buildSource;
    private _buildInjectedJavascript;
    postMessage(message: string, targetOrigin?: string): void;
    reload(): void;
    goBack(): void;
    goForward(): void;
}
export default WebView;
