google.maps.__gjsload__('search_impl', function(_) {
    var mjb = function(a) {
            _.F.call(this, a)
        },
        ojb = function(a) {
            var b = _.tj.Ia;
            a = a.toArray();
            njb || (njb = {
                K: "sssM",
                N: ["ss"]
            });
            return b.call(_.tj, a, njb)
        },
        pjb = function(a, b) {
            _.D(a.m, 3, b)
        },
        qjb = function(a) {
            _.F.call(this, a)
        },
        rjb = function() {
            var a = _.Kk,
                b = _.Rj;
            this.h = _.td;
            this.g = _.Pl(_.rv, a, _.ew + "/maps/api/js/LayersService.GetFeature", b)
        },
        ujb = function(a, b, c) {
            var d = _.YF(new rjb);
            c.Di = (0, _.Qa)(d.load, d);
            c.clickable = 0 != a.get("clickable");
            _.FGa(c, _.MN(b));
            var e = [];
            e.push(_.M(c, "click", (0, _.Qa)(sjb, null, a)));
            _.mb(["mouseover",
                "mouseout", "mousemove"
            ], function(f) {
                e.push(_.M(c, f, (0, _.Qa)(tjb, null, a, f)))
            });
            e.push(_.M(a, "clickable_changed", function() {
                a.g.clickable = 0 != a.get("clickable")
            }));
            a.h = e
        },
        sjb = function(a, b, c, d, e) {
            var f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, 0 == e.getStatus())) {
                f.location = _.S(e.m, 2) ? new _.we(_.lo(_.I(e.m, 2, _.po).m, 1), _.lo(_.I(e.m, 2, _.po).m, 2)) : null;
                f.fields = {};
                for (var g = _.E(e.m, 3), h = 0; h < g; ++h) {
                    var k = _.em(e.m, 3, _.SN, h);
                    f.fields[k.getKey()] = k.Da()
                }
            }
            _.N(a, "click", b, c, d, f)
        },
        tjb = function(a, b, c, d, e, f, g) {
            var h =
                null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.N(a, b, c, d, e, h, g)
        },
        vjb = function() {};
    _.B(mjb, _.F);
    mjb.prototype.Rb = function() {
        return _.L(this.m, 2)
    };
    var njb;
    _.B(qjb, _.F);
    qjb.prototype.getStatus = function() {
        return _.H(this.m, 1, -1)
    };
    rjb.prototype.load = function(a, b) {
        function c(g) {
            g = new qjb(g);
            b(g)
        }
        var d = new mjb;
        _.D(d.m, 1, a.layerId.split("|")[0]);
        _.D(d.m, 2, a.featureId);
        pjb(d, _.qd(_.sd(this.h)));
        for (var e in a.parameters) {
            var f = _.nd(d.m, 4, _.SN);
            _.D(f.m, 1, e);
            _.D(f.m, 2, a.parameters[e])
        }
        a = ojb(d);
        this.g(a, c, c);
        return a
    };
    rjb.prototype.cancel = function() {
        throw Error("Not implemented");
    };
    vjb.prototype.ey = function(a) {
        if (_.Zi[15]) {
            var b = a.o,
                c = a.o = a.getMap();
            b && a.g && (a.j ? (b = b.__gm.j, b.set(b.get().If(a.g))) : a.g && _.aHa(a.g, b) && (_.mb(a.h || [], _.ff), a.h = null));
            if (c) {
                var d = a.get("layerId"),
                    e = a.get("spotlightDescription"),
                    f = a.get("paintExperimentIds"),
                    g = a.get("styler"),
                    h = a.get("mapsApiLayer"),
                    k = a.get("darkLaunch"),
                    l = a.get("mapFeatures"),
                    m = a.get("travelMapRequest"),
                    p = a.get("searchPipeMetadata"),
                    q = a.get("overlayLayer"),
                    r = a.get("caseExperimentIds"),
                    t = a.get("airQualityPipeMetadata");
                b = new _.sn;
                d = d.split("|");
                b.layerId = d[0];
                for (var u = 1; u < d.length; ++u) {
                    var x = _.A(d[u].split(":")),
                        y = x.next().value;
                    x = _.na(x);
                    b.parameters[y] = x.join(":")
                }
                e && (b.spotlightDescription = new _.Et(e));
                f && (b.paintExperimentIds = f.slice(0));
                g && (b.styler = new _.yn(g));
                m && (b.travelMapRequest = new _.Xu(m));
                h && (b.mapsApiLayer = new _.dm(h));
                l && (b.mapFeatures = l);
                p && (b.searchPipeMetadata = new _.Op(p));
                q && (b.overlayLayer = new _.ns(q));
                r && (b.caseExperimentIds = r.slice(0));
                t && (b.airQualityPipeMetadata = new _.bu(t));
                b.darkLaunch = !!k;
                a.g =
                    b;
                a.j = a.get("renderOnBaseMap");
                a.j ? (a = c.__gm.j, a.set(a.get().Rd(b))) : ujb(a, c, b);
                _.Q(c, "Lg");
                _.P(c, 148282)
            }
        }
    };
    _.Ue("search_impl", new vjb);
});