google.maps.__gjsload__('overlay', function(_) {
    var ky = function(a) {
            this.g = a
        },
        zoa = function() {},
        ly = function(a) {
            a.Eq = a.Eq || new zoa;
            return a.Eq
        },
        Aoa = function(a) {
            this.Ba = new _.Hi(function() {
                var b = a.Eq;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Yo && a.onAdd) a.onAdd();
                        b.Yo = !0;
                        a.draw()
                    }
                } else {
                    if (b.Yo)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Yo = !1
                }
            }, 0)
        },
        Boa = function(a, b) {
            function c() {
                return _.Ii(e.Ba)
            }
            var d = ly(a),
                e = d.On;
            e || (e = d.On = new Aoa(a));
            _.mb(d.Oa || [], _.ff);
            var f = d.Wa = d.Wa || new _.Yv,
                g = b.__gm;
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("center",
                g, "projectionCenterQ");
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            f = d.Cv = d.Cv || new ky(f);
            f.bindTo("zoom", g);
            f.bindTo("offset", g);
            f.bindTo("projection", b);
            f.bindTo("projectionTopLeft", g);
            a.bindTo("projection", f, "outProjection");
            a.bindTo("panes", g);
            d.Oa = [_.M(a, "panes_changed", c), _.M(g, "zoom_changed", c), _.M(g, "offset_changed", c), _.M(b, "projection_changed", c), _.M(g, "projectioncenterq_changed", c)];
            c();
            b instanceof _.zf ? (_.Q(b, "Ox"), _.P(b, 148440)) : b instanceof _.hh && (_.Q(b, "Oxs"), _.P(b, 181451))
        },
        Foa = function(a) {
            if (a) {
                var b = a.getMap();
                if (Coa(a) !== b && b && b instanceof _.zf) {
                    var c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Doa(b, a, c.overlayLayer) : c.h.then(function(d) {
                        d = d.ka;
                        var e = new my(b, d);
                        d.tb(e);
                        c.overlayLayer = e;
                        Eoa(a);
                        Foa(a)
                    })
                }
            }
        },
        Eoa = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.g.unbindAll(), b.g.set("panes", null), b.g.set("projection", null), b.j.Fd(b), b.h && (b.h = !1, b.g.onRemove ? b.g.onRemove() : b.g.remove()))
            }
        },
        Coa = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Doa = function(a, b, c) {
            this.map = a;
            this.g =
                b;
            this.j = c;
            this.h = !1;
            _.Q(this.map, "Ox");
            _.P(this.map, 148440);
            c.od(this)
        },
        Goa = function(a, b) {
            a.g.get("projection") != b && (a.g.bindTo("panes", a.map.__gm), a.g.set("projection", b))
        },
        my = function(a, b) {
            this.o = a;
            this.j = b;
            this.g = null;
            this.h = []
        };
    _.Ua(ky, _.O);
    ky.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Wd(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.g : null))
    };
    var ny = {};
    _.Ua(Aoa, _.O);
    ny.od = function(a) {
        if (a) {
            var b = a.getMap();
            (ly(a).kv || null) !== b && (b && Boa(a, b), ly(a).kv = b)
        }
    };
    ny.Fd = function(a) {
        var b = ly(a),
            c = b.Wa;
        c && c.unbindAll();
        (c = b.Cv) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Oa && _.mb(b.Oa, _.ff);
        b.Oa = null;
        b.On && (b.On.Ba.xc(), b.On = null);
        delete ly(a).kv
    };
    var oy = {};
    Doa.prototype.draw = function() {
        this.h || (this.h = !0, this.g.onAdd && this.g.onAdd());
        this.g.draw && this.g.draw()
    };
    my.prototype.dispose = function() {};
    my.prototype.Kb = function(a, b, c, d, e, f, g, h) {
        var k = this.g = this.g || new _.gr(this.o, this.j, function() {});
        k.Kb(a, b, c, d, e, f, g, h);
        a = _.A(this.h);
        for (b = a.next(); !b.done; b = a.next()) b = b.value, Goa(b, k), b.draw()
    };
    my.prototype.od = function(a) {
        this.h.push(a);
        this.g && Goa(a, this.g);
        this.j.refresh()
    };
    my.prototype.Fd = function(a) {
        _.pb(this.h, a)
    };
    oy.od = Foa;
    oy.Fd = Eoa;
    _.Ue("overlay", {
        xs: function(a) {
            if (a) {
                (0, ny.Fd)(a);
                (0, oy.Fd)(a);
                var b = a.getMap();
                b && (b instanceof _.zf ? (0, oy.od)(a) : (0, ny.od)(a))
            }
        },
        preventMapHitsFrom: function(a) {
            _.Jr(a, {
                zd: function(b) {
                    _.kn(b.event.Ea)
                },
                yc: function(b) {
                    return _.or(b)
                },
                Kh: function(b) {
                    return _.pr(b)
                },
                gd: function(b) {
                    return _.pr(b)
                },
                Ec: function(b) {
                    return _.qr(b)
                }
            }).Xi(!0)
        },
        preventMapHitsAndGesturesFrom: function(a) {
            a.addEventListener("click", _.bf);
            a.addEventListener("contextmenu", _.bf);
            a.addEventListener("dblclick", _.bf);
            a.addEventListener("mousedown",
                _.bf);
            a.addEventListener("mousemove", _.bf);
            a.addEventListener("MSPointerDown", _.bf);
            a.addEventListener("pointerdown", _.bf);
            a.addEventListener("touchstart", _.bf);
            a.addEventListener("wheel", _.bf)
        }
    });
});