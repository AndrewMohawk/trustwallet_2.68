"use strict";
(self.webpackChunkbrowser_extension_wallet =
  self.webpackChunkbrowser_extension_wallet || []).push([
  [8423],
  {
    2321: (T, h, t) => {
      t.d(h, { S: () => e });
      const e = (l) => l.message.includes("memory access out of bounds");
    },
    23119: (T, h, t) => {
      t.d(h, { c: () => u });
      var e = t(74848),
        l = t(81821),
        r = t(61801),
        c = t(16665),
        a = t(42201),
        o = t(96540),
        C = t.n(o),
        P = Object.defineProperty,
        d = Object.defineProperties,
        _ = Object.getOwnPropertyDescriptors,
        E = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        O = Object.prototype.propertyIsEnumerable,
        D = (s, n, M) =>
          n in s
            ? P(s, n, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: M,
              })
            : (s[n] = M),
        i = (s, n) => {
          for (var M in n || (n = {})) p.call(n, M) && D(s, M, n[M]);
          if (E) for (var M of E(n)) O.call(n, M) && D(s, M, n[M]);
          return s;
        },
        m = (s, n) => d(s, _(n));
      const u = (s) => {
        const [n, M] = (0, o.useState)(!1),
          [f, $] = (0, o.useState)(!s.value),
          S = f ? "" : s.error;
        return (
          (0, o.useEffect)(() => {
            s.value && $(!1);
          }, [s.value]),
          (0, e.jsx)("div", {
            className: "flex flex-col space-y-2",
            children: (0, e.jsx)(
              c.S,
              m(
                i({ testid: s.testid, type: n ? a.Ih.TEXT : a.Ih.PASSWORD }, s),
                {
                  error: S,
                  validation: s.validation,
                  onEnter: s.onEnter,
                  actions: [
                    {
                      key: "show-password",
                      placeholder: n
                        ? (0, e.jsx)(r.N, {
                            width: 16,
                            height: 16,
                            colorClass: "text-primary-default",
                          })
                        : (0, e.jsx)(l.Z, {
                            width: 16,
                            height: 16,
                            colorClass: "text-primary-default",
                          }),
                      onClick: () => M((k) => !k),
                    },
                  ],
                }
              )
            ),
          })
        );
      };
    },
    25516: (T, h, t) => {
      t.d(h, { u: () => _ });
      var e = t(70438),
        l = t(64145),
        r = t(72960),
        c = t(93155),
        a = t(68157),
        o = t(96540),
        C = t.n(o),
        P = (E, p, O) =>
          new Promise((D, i) => {
            var m = (n) => {
                try {
                  s(O.next(n));
                } catch (M) {
                  i(M);
                }
              },
              u = (n) => {
                try {
                  s(O.throw(n));
                } catch (M) {
                  i(M);
                }
              },
              s = (n) =>
                n.done ? D(n.value) : Promise.resolve(n.value).then(m, u);
            s((O = O.apply(E, p)).next());
          });
      const d = 10 * 1e3,
        _ = () => {
          const [E, p] = (0, o.useState)(!1),
            O = (0, a.GV)((i) => i.settings.passkeyId),
            D = (0, o.useCallback)(
              () =>
                P(null, null, function* () {
                  if (!(E || !O)) {
                    p(!0);
                    try {
                      const i = new e.A(),
                        m = yield Promise.race([
                          i.login(O),
                          new Promise((u) =>
                            setTimeout(() => {
                              e.A.abortController.abort(), u(void 0);
                            }, d)
                          ),
                        ]);
                      if (m?.password)
                        return (
                          yield l.YW.emit(r.A.GET_PASSKEY_VAULT, m.password),
                          m.password
                        );
                    } catch (i) {
                      c.A.error(i);
                    } finally {
                      p(!1);
                    }
                  }
                }),
              [E, O]
            );
          return { isLoadingBiometrics: E, authenticateWithBiometrics: D };
        };
    },
    32454: (T, h, t) => {
      t.d(h, { E: () => c });
      var e = t(74848);
      const l = 24,
        r = 24,
        c = ({ width: a, height: o, colorClass: C }) =>
          (0, e.jsxs)("svg", {
            className: C,
            fill: "none",
            width: a ?? l,
            height: o ?? r,
            viewBox: `0 0 ${l} ${r}`,
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M17.5361 4.76367C18.0823 4.35034 18.86 4.45785 19.2734 5.00391L19.4854 5.29492C20.5134 6.77082 21.1162 8.5666 21.1162 10.5V13.5C21.1162 18.5343 17.0353 22.6152 12.001 22.6152C11.316 22.615 10.7607 22.06 10.7607 21.375C10.7607 20.69 11.316 20.135 12.001 20.1348C15.6651 20.1348 18.6357 17.1642 18.6357 13.5V10.5C18.6357 9.09056 18.1972 7.78661 17.4492 6.71289L17.2949 6.50098C16.8819 5.95479 16.9903 5.17705 17.5361 4.76367ZM20.1094 6.59082C20.2132 6.80575 20.3097 7.025 20.3965 7.24902L20.2598 6.91602C20.1644 6.69645 20.0602 6.48154 19.9482 6.27148L20.1094 6.59082ZM17.6055 4.85547C17.5636 4.88718 17.525 4.92163 17.4893 4.95801L17.6055 4.85547C17.6363 4.83216 17.6689 4.81069 17.7012 4.79102L17.6055 4.85547Z",
                fill: "currentColor",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.12598 10.7598C4.81108 10.7598 5.36621 11.3149 5.36621 12V13.5C5.36621 16.0186 6.76993 18.2111 8.84277 19.3359L8.95117 19.4023C9.43588 19.7328 9.62259 20.3621 9.39648 20.9033L9.3418 21.0176C9.0355 21.582 8.35442 21.8135 7.77441 21.5713L7.65918 21.5166C4.81882 19.9754 2.88574 16.9643 2.88574 13.5V12C2.88574 11.315 3.44104 10.76 4.12598 10.7598ZM9.05762 19.6416L8.97559 19.5654C8.96812 19.5592 8.95982 19.5539 8.95215 19.5479C8.98942 19.5773 9.02501 19.6081 9.05762 19.6416ZM8.40039 19.2109C8.46915 19.2544 8.54091 19.293 8.61133 19.334C8.51131 19.2757 8.41256 19.2156 8.31543 19.1533L8.40039 19.2109Z",
                fill: "currentColor",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M7.05371 8.43262C7.34045 7.87331 8.01028 7.61132 8.6084 7.84473L8.72461 7.89648C9.24682 8.16421 9.50986 8.76565 9.35254 9.33105L9.3125 9.45117C9.18623 9.77453 9.11621 10.1277 9.11621 10.5V13.5C9.11621 15.0929 10.4081 16.3846 12.001 16.3848C12.7074 16.3848 13.3519 16.1318 13.8535 15.7109L13.9551 15.6348C14.475 15.2814 15.1887 15.3724 15.6016 15.8643L15.6777 15.9648C16.0079 16.4503 15.9505 17.1047 15.541 17.5254L15.4482 17.6113C14.5164 18.3932 13.3121 18.8652 12.001 18.8652C9.03786 18.865 6.63574 16.4632 6.63574 13.5V10.5C6.63574 9.814 6.76518 9.15519 7.00195 8.54883L7.05371 8.43262ZM15.459 17.4443C15.4324 17.4717 15.4039 17.4984 15.374 17.5234L15.459 17.4443C15.4854 17.4171 15.51 17.3896 15.5332 17.3604L15.459 17.4443Z",
                fill: "currentColor",
              }),
              (0, e.jsx)("path", {
                d: "M12.001 9.63477C12.6861 9.63477 13.2412 10.1899 13.2412 10.875V13.125C13.2412 13.8101 12.6861 14.3652 12.001 14.3652C11.316 14.365 10.7607 13.81 10.7607 13.125V10.875C10.7607 10.19 11.316 9.63496 12.001 9.63477Z",
                fill: "currentColor",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.001 5.13477C14.9643 5.13477 17.3662 7.53671 17.3662 10.5V12.75C17.3662 13.4351 16.8111 13.9902 16.126 13.9902C15.441 13.99 14.8857 13.435 14.8857 12.75V10.5C14.8857 8.90693 13.594 7.61523 12.001 7.61523C11.9109 7.61525 11.8218 7.61996 11.7344 7.62793L11.4746 7.66309C10.8011 7.78636 10.155 7.34056 10.0312 6.66699C9.90758 5.99332 10.3538 5.34658 11.0273 5.22266L11.2656 5.18457C11.5064 5.15149 11.7522 5.13478 12.001 5.13477ZM10.7041 7.42676C10.7215 7.43646 10.7399 7.44434 10.7578 7.45312C10.7074 7.42844 10.6584 7.40096 10.6123 7.36914L10.7041 7.42676Z",
                fill: "currentColor",
              }),
              (0, e.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.001 1.38477C13.228 1.38477 14.4018 1.62747 15.4736 2.06934L15.5889 2.12402C16.1058 2.40136 16.3579 3.00718 16.1904 3.56934L16.1475 3.68945C15.9025 4.28315 15.2499 4.58607 14.6475 4.40625L14.5283 4.36328C13.7511 4.04286 12.8981 3.86523 12.001 3.86523C9.13875 3.86539 6.69698 5.6792 5.76758 8.22266L5.68262 8.4707C5.4864 9.08211 4.86001 9.43604 4.24512 9.30566L4.12207 9.27344C3.46999 9.06403 3.11023 8.36509 3.31934 7.71289L3.43652 7.37207C4.71241 3.87981 8.064 1.38492 12.001 1.38477ZM3.94824 9.07227C3.98085 9.09062 4.01494 9.10684 4.0498 9.12207L3.94824 9.07227C3.91548 9.05386 3.88484 9.034 3.85449 9.0127L3.94824 9.07227ZM15.2275 4.31836C15.1921 4.32568 15.1563 4.33207 15.1201 4.33594L15.2275 4.31836C15.2629 4.31108 15.2977 4.30259 15.332 4.29199L15.2275 4.31836ZM9.82031 1.76562C9.70384 1.79461 9.58826 1.8259 9.47363 1.85938C9.70266 1.79249 9.93567 1.7353 10.1719 1.68652L9.82031 1.76562Z",
                fill: "currentColor",
              }),
            ],
          });
    },
    37395: (T, h, t) => {
      t.d(h, { T: () => r });
      var e = t(68157),
        l = t(31357);
      const r = () => {
        const c = (0, e.jL)();
        return {
          setColorMode: (o) => {
            c(l.s.actions.setUIColorMode(o));
          },
        };
      };
    },
    39629: (T, h, t) => {
      t.d(h, { G: () => e });
      const e = (l) => {
        if (!l) return !1;
        const r = l.message || "",
          c = l.code || "";
        return !(
          r.includes("cancel") ||
          r.includes("abort") ||
          c === "AbortError" ||
          c === "NotAllowedError" ||
          r.includes("timeout") ||
          c === "TimeoutError"
        );
      };
    },
    64983: (T, h, t) => {
      t.d(h, { Y: () => st });
      var e = t(74848),
        l = t(73082),
        r = t(8457),
        c = t(39255),
        a = t(26264),
        o = t(23207),
        C = t(37395),
        P = t(65512),
        d = t(52619),
        _ = t(55418),
        E = t(99550),
        p = t(68632),
        O = t(22146),
        D = t(79830),
        i = t(52114),
        m = t(1279),
        u = t(64145),
        s = t(29584),
        n = t(93726),
        M = t(11711),
        f = t(80179),
        $ = t(93155),
        S = t(96540),
        k = t.n(S),
        G = t(6442),
        et = (X, Y, W) =>
          new Promise((H, I) => {
            var Q = (U) => {
                try {
                  j(W.next(U));
                } catch (R) {
                  I(R);
                }
              },
              Z = (U) => {
                try {
                  j(W.throw(U));
                } catch (R) {
                  I(R);
                }
              },
              j = (U) =>
                U.done ? H(U.value) : Promise.resolve(U.value).then(Q, Z);
            j((W = W.apply(X, Y)).next());
          });
      const st = ({ opened: X, onClose: Y, onResetting: W }) => {
        const { setColorMode: H } = (0, C.T)(),
          { formatMessage: I } = (0, G.A)(),
          [Q, Z] = (0, S.useState)(!1),
          { trackAnalytics: j } = (0, o.s)(),
          U = (0, S.useCallback)(
            () =>
              et(null, null, function* () {
                try {
                  Z(!0),
                    W(),
                    yield u.YW.emit(M.A.RESET),
                    H(n.X.SYSTEM),
                    j({
                      event: s.BQ.RESET_WALLET,
                      props: { pageViewSource: s.Un.UNLOCK },
                    }),
                    (0, f.V3)(a.b.ONBOARDING),
                    window.close();
                } catch (R) {
                  $.A.error(R);
                }
              }),
            [H]
          );
        return Q
          ? (0, e.jsxs)(_.o, {
              direction: E.R.COLUMN,
              children: [
                (0, e.jsx)("div", { children: (0, e.jsx)(r.A, {}) }),
                (0, e.jsx)("div", {
                  className: "pt-20 pb-8",
                  children: (0, e.jsx)(i.E, {
                    type: m.jK.SUBTITLE,
                    children: I({ id: "modal-reset-wallet.loading" }),
                  }),
                }),
                (0, e.jsx)("div", {
                  className: "pb-28",
                  children: (0, e.jsx)(D.y, { size: p.Y.XLARGE }),
                }),
              ],
            })
          : (0, e.jsx)(O.a, {
              opened: X,
              onClose: Y,
              title: I({
                id: "modal-reset-wallet.modal.title",
                defaultMessage: "Reset your wallet",
              }),
              children: (0, e.jsxs)(_.o, {
                direction: E.R.COLUMN,
                children: [
                  (0, e.jsx)("div", { children: (0, e.jsx)(l.X, {}) }),
                  (0, e.jsx)("div", {
                    className: "py-2",
                    children: (0, e.jsxs)(i.E, {
                      type: m.jK.HEADER,
                      children: [" ", I({ id: "modal-reset-wallet.title" })],
                    }),
                  }),
                  (0, e.jsx)("div", {
                    children: I(
                      { id: "modal-reset-wallet.description" },
                      {
                        brandName: c.n5.BRAND_NAME,
                        seedPhraseName: c.n5.SEED_PHRASE_NAME,
                        li: (R) =>
                          (0, e.jsx)("div", {
                            className: "pb-2",
                            children: (0, e.jsx)(i.E, {
                              weight: m.nG.NORMAL,
                              theme: m.Il.SECONDARY,
                              children: R,
                            }),
                          }),
                        b: (R) =>
                          (0, e.jsx)("strong", {
                            className: "font-medium",
                            children: R,
                          }),
                      }
                    ),
                  }),
                  (0, e.jsx)("div", {
                    className: "pt-3 pb-5 w-full",
                    children: (0, e.jsx)(P.$, {
                      theme: d.ry.DANGER,
                      onClick: U,
                      children: I({
                        id: "modal-reset-wallet.btn-i-understand",
                      }),
                    }),
                  }),
                  (0, e.jsx)("div", {
                    className: " w-full",
                    children: (0, e.jsx)(P.$, {
                      theme: d.ry.TRANSPARENT,
                      onClick: Y,
                      children: (0, e.jsx)(i.E, {
                        type: m.jK.TITLE,
                        theme: m.Il.BRAND,
                        children: I({ id: "generic.cancel" }),
                      }),
                    }),
                  }),
                ],
              }),
            });
      };
    },
    68423: (T, h, t) => {
      t.r(h), t.d(h, { default: () => R });
      var e = t(74848),
        l = t(26264),
        r = t(65512),
        c = t(52619),
        a = t(23119),
        o = t(55418),
        C = t(4800),
        P = t(99550),
        d = t(52114),
        _ = t(1279),
        E = t(11711),
        p = t(68157),
        O = t(61855),
        D = t(26113),
        i = t(96540),
        m = t.n(i),
        u = t(6442),
        s = t(47767),
        n = t(64983),
        M = t(63369),
        f = t(29584),
        $ = t(23207),
        S = t(72960),
        k = t(32454),
        G = t(64145),
        et = t(80928),
        st = t(80179),
        X = t(2321),
        Y = t(25516),
        W = t(82384),
        H = t(93155),
        I = t(68869),
        Q = t(39629),
        Z = t(58097),
        j = (q, L, y) =>
          new Promise((N, x) => {
            var w = (g) => {
                try {
                  z(y.next(g));
                } catch (J) {
                  x(J);
                }
              },
              ot = (g) => {
                try {
                  z(y.throw(g));
                } catch (J) {
                  x(J);
                }
              },
              z = (g) =>
                g.done ? N(g.value) : Promise.resolve(g.value).then(w, ot);
            z((y = y.apply(q, L)).next());
          });
      const R = () => {
        var q;
        (0, M.K)({ event: f.Un.UNLOCK, props: null });
        const { formatMessage: L } = (0, u.A)(),
          y = (0, s.Zp)(),
          N = (0, s.zy)(),
          { trackAnalytics: x } = (0, $.s)(),
          [w, ot] = (0, i.useState)(""),
          [z, g] = (0, i.useState)(""),
          [J, at] = (0, i.useState)(!1),
          [_t, it] = (0, i.useState)(!1),
          [Pt, Ot] = (0, i.useState)(!1),
          ct = (0, p.GV)((v) => v.app),
          F = (0, p.GV)((v) => v.settings.passkeyId),
          Ct = (0, p.GV)((v) => v.settings.isPasswordGenerated),
          [B, dt] = (0, i.useState)(!1),
          Et =
            (q = new URLSearchParams(N.search).get("biometrics")) != null
              ? q
              : "",
          [ut, Mt] = (0, i.useState)(!1),
          pt = (0, p.GV)((v) => v.wallet.wallets),
          { authenticateWithBiometrics: ht, isLoadingBiometrics: nt } = (0,
          Y.u)(),
          tt = (0, i.useCallback)(
            () =>
              j(null, null, function* () {
                var v;
                try {
                  const A = yield ht();
                  if (A) {
                    yield G.YW.emit(S.A.GET_PASSKEY_VAULT, A);
                    const K = [];
                    for (const [Dt, rt] of Object.entries(pt))
                      try {
                        const { id: V } = rt,
                          lt = yield G.YW.emit(Z.A.GET_SEED_PHRASE, {
                            password: "",
                            passkeyPassword: A,
                            walletId: V,
                          });
                        K.push({ id: V, errorMessage: lt });
                      } catch {}
                    const b = ((v = N.state) == null ? void 0 : v.from) || {};
                    x({
                      event: f.BQ.UNLOCK,
                      props: {
                        pageViewSource: f.Un.UNLOCK,
                        status: "success",
                        error: K,
                      },
                    }),
                      y(b.pathname + b.search || l.b.DEFAULT, { replace: !0 });
                  }
                } catch (A) {
                  H.A.error("Biometrics authentication failed:", A),
                    (0, Q.G)(A) &&
                      (0, I.C)(new Error("Biometrics authentication failed"), {
                        originalError: A,
                        errorMessage: A.message,
                        errorCode: A.code,
                        context: "biometrics_unlock",
                      }),
                    x({
                      event: f.BQ.UNLOCK,
                      props: {
                        pageViewSource: f.Un.UNLOCK,
                        status: "fail",
                        error: A.message || "Biometrics authentication failed",
                      },
                    });
                }
              }),
            [ht, N.state, y, x]
          );
        (0, W.y)({ preventAutoTrigger: B, triggerBiometrics: tt }),
          (0, i.useEffect)(() => {
            ct.authenticated && y(l.b.DEFAULT, { replace: !0 });
          }, [ct.authenticated, F, y]);
        const mt = (0, i.useCallback)(
            (v) =>
              j(null, null, function* () {
                var A;
                v?.preventDefault(), it(!0);
                try {
                  p.M_.dispatch(O.A.actions.setAuthenticating(!0)),
                    yield G.YW.emit(E.A.AUTHENTICATE, w);
                  const K = ((A = N.state) == null ? void 0 : A.from) || {},
                    b = [];
                  for (const [Dt, rt] of Object.entries(pt))
                    try {
                      const { id: V } = rt,
                        lt = yield G.YW.emit(Z.A.GET_SEED_PHRASE, {
                          password: w,
                          passkeyPassword: "",
                          walletId: V,
                        });
                      b.push({ id: V, errorMessage: lt });
                    } catch {}
                  x({
                    event: f.BQ.UNLOCK,
                    props: {
                      pageViewSource: f.Un.UNLOCK,
                      status: "success",
                      error: b,
                    },
                  }),
                    y(K.pathname + K.search || l.b.DEFAULT, { replace: !0 });
                } catch (K) {
                  p.M_.dispatch(O.A.actions.setAuthenticating(!1)),
                    x({
                      event: f.BQ.UNLOCK,
                      props: {
                        pageViewSource: f.Un.UNLOCK,
                        status: "fail",
                        error: K.message,
                      },
                    }),
                    (0, X.S)(K)
                      ? g(L({ id: "unlock.memory-error" }))
                      : g(K.message),
                    it(!1);
                }
              }),
            [L, N.state, y, w, x]
          ),
          vt = () => (0, st.V3)(l.b.UNLOCK + "?biometrics=true");
        return (
          (0, i.useEffect)(() => {
            if (F && Et === "true") {
              if (ut) return;
              Mt(!0), tt();
            }
          }, [ut, F, Et, tt]),
          (0, e.jsxs)(C.LN, {
            children: [
              !Pt &&
                (0, e.jsxs)(C.Gv, {
                  children: [
                    (0, e.jsx)(o.o, {
                      direction: P.R.COLUMN,
                      children: (0, e.jsxs)("div", {
                        className: "max-w-xs flex items-center flex-col",
                        children: [
                          (0, e.jsx)(et.p, {}),
                          (0, e.jsx)("div", {
                            className: "pt-4 pb-6 text-center",
                            children: (0, e.jsxs)(d.E, {
                              type: _.jK.TITLE,
                              children: [" ", L({ id: "unlock.subheading" })],
                            }),
                          }),
                          (0, e.jsxs)("form", {
                            className: "flex flex-col w-full",
                            onSubmit: mt,
                            children: [
                              (!F || B) &&
                                (0, e.jsx)(a.c, {
                                  testid: "password-field",
                                  label: L({
                                    id: "component.input-password.placeholder",
                                  }),
                                  value: w,
                                  onChange: (v) => {
                                    g(""), ot(v.target.value);
                                  },
                                  error: z,
                                  autoFocus: !0,
                                }),
                              (0, e.jsxs)("div", {
                                className:
                                  "pt-6 pb-4 w-full flex flex-col gap-4",
                                children: [
                                  (!F || B) &&
                                    (0, e.jsx)(r.$, {
                                      type: c.II.SUBMIT,
                                      disabled: !w || nt,
                                      loading: _t,
                                      onClick: D.Z,
                                      theme: F && !B ? c.ry.NEUTRAL : void 0,
                                      children: L({ id: "generic.unlock" }),
                                    }),
                                  F &&
                                    (0, e.jsxs)(e.Fragment, {
                                      children: [
                                        (0, e.jsx)(r.$, {
                                          type: c.II.BUTTON,
                                          loading: nt,
                                          theme: B ? c.ry.TRANSPARENT : void 0,
                                          disabled: _t || nt,
                                          onClick: B ? () => dt(!1) : tt,
                                          children: (0, e.jsx)(d.E, {
                                            theme: B
                                              ? _.Il.BRAND
                                              : _.Il.ON_PRIMARY,
                                            type: _.jK.BODY,
                                            children: (0, e.jsxs)("span", {
                                              className:
                                                "flex gap-2 items-center",
                                              children: [
                                                L({
                                                  id: "generic.unlock-biometrics",
                                                  defaultMessage:
                                                    "Unlock with Biometrics",
                                                }),
                                                (0, e.jsx)(k.E, {}),
                                              ],
                                            }),
                                          }),
                                        }),
                                        !B &&
                                          (0, e.jsx)(r.$, {
                                            className: "-mt-4",
                                            theme: c.ry.TRANSPARENT,
                                            onClick: () => vt(),
                                            children: (0, e.jsx)(d.E, {
                                              theme: _.Il.UTILITY_1_DEFAULT,
                                              type: _.jK.BODY,
                                              children: L({
                                                id: "unlock.biometrics-issues",
                                                defaultMessage:
                                                  "Having trouble with biometrics?",
                                              }),
                                            }),
                                          }),
                                        !B &&
                                          !Ct &&
                                          (0, e.jsx)(r.$, {
                                            theme: c.ry.TRANSPARENT,
                                            onClick: () => dt(!0),
                                            children: (0, e.jsx)(d.E, {
                                              theme: _.Il.BRAND,
                                              type: _.jK.BODY,
                                              children: L({
                                                id: "unlock.use-password-instead",
                                                defaultMessage:
                                                  "Use password instead",
                                              }),
                                            }),
                                          }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, e.jsxs)("div", {
                      className:
                        "flex flex-col items-center justify-end text-center w-full border-t-line border-t pt-4",
                      children: [
                        (0, e.jsx)("div", {
                          className: "w-10/12",
                          children: (0, e.jsx)(d.E, {
                            weight: _.nG.NORMAL,
                            theme: _.Il.SECONDARY,
                            children: L({ id: "unlock.cannot-login" }),
                          }),
                        }),
                        (0, e.jsx)(r.$, {
                          theme: c.ry.TRANSPARENT,
                          onClick: () => at(!0),
                          children: (0, e.jsx)(d.E, {
                            theme: _.Il.BRAND,
                            type: _.jK.BODY,
                            children: L({ id: "unlock.reset-wallet" }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              (0, e.jsx)(n.Y, {
                opened: J,
                onClose: () => at(!1),
                onResetting: () => Ot(!0),
              }),
            ],
          })
        );
      };
    },
    70438: (T, h, t) => {
      t.d(h, { A: () => r });
      var e = t(48287).Buffer,
        l = (c, a, o) =>
          new Promise((C, P) => {
            var d = (p) => {
                try {
                  E(o.next(p));
                } catch (O) {
                  P(O);
                }
              },
              _ = (p) => {
                try {
                  E(o.throw(p));
                } catch (O) {
                  P(O);
                }
              },
              E = (p) =>
                p.done ? C(p.value) : Promise.resolve(p.value).then(d, _);
            E((o = o.apply(c, a)).next());
          });
      class r {
        constructor(a = navigator.credentials) {
          this.credentials = a;
        }
        generateRandomData() {
          const a = new Uint8Array(32);
          return crypto.getRandomValues(a), a;
        }
        verifyChallenge(a, o) {
          const C = e
              .from(a)
              .toString("base64")
              .replace(/=/g, "")
              .replace(/\+/g, "-")
              .replace(/\//g, "_"),
            P = JSON.parse(new TextDecoder().decode(o.response.clientDataJSON));
          return C === P.challenge;
        }
        create() {
          return l(this, null, function* () {
            const a = this.generateRandomData(),
              o = yield this.credentials.create({
                publicKey: {
                  challenge: this.generateRandomData(),
                  rp: {
                    name: "Trust-Wallet-Extension",
                    id: window.location.hostname,
                  },
                  user: {
                    id: a,
                    name: "Trust-Wallet-Extension",
                    displayName: "Trust-Wallet-Extension",
                  },
                  pubKeyCredParams: [
                    { type: "public-key", alg: -7 },
                    { type: "public-key", alg: -257 },
                    { type: "public-key", alg: -8 },
                  ],
                  authenticatorSelection: {
                    requireResidentKey: !0,
                    userVerification: "preferred",
                  },
                  timeout: 60 * 1e3,
                },
              });
            if (!o) throw new Error("Failed to create credential");
            return {
              password: e.from(a).toString("hex"),
              credential: o,
              credentialId: e.from(o.rawId).toString("hex"),
            };
          });
        }
        verify(a) {
          return l(this, arguments, function* ({ credential: o, password: C }) {
            const P =
                o.response &&
                o.response.getTransports &&
                o.response.getTransports(),
              d = this.generateRandomData(),
              _ = yield this.credentials.get({
                publicKey: {
                  challenge: d,
                  allowCredentials: [
                    { id: o.rawId, type: "public-key", transports: P },
                  ],
                  userVerification: "required",
                },
              }),
              E = _.response.userHandle;
            if (!E) throw new Error("Missing userHandle");
            if (C !== e.from(E).toString("hex"))
              throw new Error("Missing password");
            if (!this.verifyChallenge(d, _))
              throw new Error("Invalid challenge");
            return !0;
          });
        }
        login(a) {
          return l(this, null, function* () {
            var o;
            r.abortController && r.abortController.abort();
            const C = new AbortController();
            r.abortController = C;
            const P = this.generateRandomData(),
              d = yield this.credentials.get({
                publicKey: {
                  challenge: P,
                  allowCredentials: [
                    { id: e.from(a, "hex"), type: "public-key" },
                  ],
                  userVerification: "required",
                },
                signal: r.abortController.signal,
              });
            if (!d) throw new Error("Auth error.");
            const _ = (o = d?.response) == null ? void 0 : o.userHandle;
            if (!_) throw new Error("Lost password.");
            if (!this.verifyChallenge(P, d))
              throw new Error("Invalid challenge.");
            return { password: e.from(_).toString("hex") };
          });
        }
      }
    },
    72960: (T, h, t) => {
      t.d(h, { A: () => r });
      var e = t(24439);
      const r = {
        VERIFY_PASSWORD: (0, e.If)("VERIFY_PASSWORD"),
        GENERATE_PASSKEY_VAULT: (0, e.If)("GENERATE_PASSKEY_VAULT"),
        GET_PASSKEY_VAULT: (0, e.If)("GET_PASSKEY_VAULT"),
      };
    },
    80928: (T, h, t) => {
      t.d(h, { p: () => m });
      var e = t(74848);
      const l = 58,
        r = 66,
        c = ({ width: u, height: s }) =>
          (0, e.jsxs)("svg", {
            fill: "none",
            width: u ?? l,
            height: s ?? r,
            viewBox: `0 0 ${l} ${r}`,
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, e.jsx)("path", {
                d: "M0 9.38949L28.8907 0V65.0042C8.2545 56.3369 0 39.7248 0 30.3353V9.38949Z",
                fill: "#48FF91",
              }),
              (0, e.jsx)("path", {
                d: "M57.7822 9.38949L28.8915 0V65.0042C49.5277 56.3369 57.7822 39.7248 57.7822 30.3353V9.38949Z",
                fill: "url(#paint0_linear_896_19677)",
              }),
              (0, e.jsx)("defs", {
                children: (0, e.jsxs)("linearGradient", {
                  id: "paint0_linear_896_19677",
                  x1: "28.8911",
                  y1: "73.5101",
                  x2: "52.5376",
                  y2: "-12.0198",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, e.jsx)("stop", {
                      offset: "0.264213",
                      stopColor: "#48FF91",
                    }),
                    (0, e.jsx)("stop", {
                      offset: "0.662556",
                      stopColor: "#0094FF",
                    }),
                    (0, e.jsx)("stop", {
                      offset: "0.800473",
                      stopColor: "#0038FF",
                    }),
                    (0, e.jsx)("stop", {
                      offset: "0.888911",
                      stopColor: "#0500FF",
                    }),
                  ],
                }),
              }),
            ],
          }),
        a = 58,
        o = 66,
        C = ({ width: u, height: s }) =>
          (0, e.jsxs)("svg", {
            fill: "none",
            width: u ?? a,
            height: s ?? o,
            viewBox: `0 0 ${a} ${o}`,
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, e.jsx)("path", {
                d: "M0 9.38949L28.8907 0V65.0042C8.2545 56.3369 0 39.7248 0 30.3353V9.38949Z",
                fill: "#0500FF",
              }),
              (0, e.jsx)("path", {
                d: "M57.7822 9.38949L28.8915 0V65.0042C49.5277 56.3369 57.7822 39.7248 57.7822 30.3353V9.38949Z",
                fill: "url(#paint0_linear_896_19678)",
              }),
              (0, e.jsx)("defs", {
                children: (0, e.jsxs)("linearGradient", {
                  id: "paint0_linear_896_19678",
                  x1: "51.3615",
                  y1: "-4.15293",
                  x2: "29.5384",
                  y2: "64.5147",
                  gradientUnits: "userSpaceOnUse",
                  children: [
                    (0, e.jsx)("stop", {
                      offset: "0.02112",
                      stopColor: "#0000FF",
                    }),
                    (0, e.jsx)("stop", {
                      offset: "0.0762423",
                      stopColor: "#0094FF",
                    }),
                    (0, e.jsx)("stop", {
                      offset: "0.163089",
                      stopColor: "#48FF91",
                    }),
                    (0, e.jsx)("stop", {
                      offset: "0.420049",
                      stopColor: "#0094FF",
                    }),
                    (0, e.jsx)("stop", {
                      offset: "0.682886",
                      stopColor: "#0038FF",
                    }),
                    (0, e.jsx)("stop", {
                      offset: "0.902465",
                      stopColor: "#0500FF",
                    }),
                  ],
                }),
              }),
            ],
          });
      var P = t(28898),
        d = t(15314),
        _ = Object.defineProperty,
        E = Object.getOwnPropertySymbols,
        p = Object.prototype.hasOwnProperty,
        O = Object.prototype.propertyIsEnumerable,
        D = (u, s, n) =>
          s in u
            ? _(u, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (u[s] = n),
        i = (u, s) => {
          for (var n in s || (s = {})) p.call(s, n) && D(u, n, s[n]);
          if (E) for (var n of E(s)) O.call(s, n) && D(u, n, s[n]);
          return u;
        };
      const m = (u) => {
        const { theme: s } = (0, P.h)();
        return s === d.W.LIGHT
          ? (0, e.jsx)(C, i({}, u))
          : (0, e.jsx)(c, i({}, u));
      };
    },
    82384: (T, h, t) => {
      t.d(h, { y: () => o });
      var e = t(68157),
        l = t(61855),
        r = t(35177),
        c = t(96540),
        a = t.n(c);
      const o = ({ preventAutoTrigger: C, triggerBiometrics: P }) => {
        const d = (0, e.GV)((E) => E.app),
          _ = (0, r.R)();
        (0, c.useEffect)(() => {
          const E = document.hasFocus();
          !d.preventAutoTriggerBiometrics && !C && (E || _)
            ? P()
            : e.M_.dispatch(l.A.actions.setPreventAutoTriggerBiometrics(!1));
        }, []);
      };
    },
  },
]);
