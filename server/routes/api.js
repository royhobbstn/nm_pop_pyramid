//

const rp = require("request-promise");

const appRouter = function(app) {

  // data to populate place name list on the client
  app.get("/place-data", function(req, res) {

    const sumlev = req.query.sumlev || '160';
    const dataset = req.query.dataset || 'acs1216';

    rp(`https://gis.dola.colorado.gov/capi/demog?limit=99999&db=${dataset}&schema=data&table=b00001&sumlev=${sumlev}&type=json`)
      .then(data => JSON.parse(data))
      .then(data => {

        if (!data || !data.data) {
          throw new Error('unexpected response, no data found');
        }

        // only need geoname, geonum
        const pruned_data = data.data.map(city => {
          return {
            geoname: city.geoname,
            geonum: city.geonum
          };
        });

        // filter out Census Designated Places (Unincorporated)
        const filtered_data = pruned_data.filter(city => {
          return !city.geoname.includes('CDP');
        });

        return res.status(200).json(filtered_data);

      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ err: err.message });
      });





  });



};

module.exports = appRouter;
