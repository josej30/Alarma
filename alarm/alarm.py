from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
import os, cgi
from google.appengine.ext.webapp import template

class MainPage(webapp.RequestHandler):
    def get(self):

	url_linktext = "hola"

        template_values = {
            'url_linktext': url_linktext,
            }

        path = os.path.join(os.path.dirname(__file__), 'index.html')
        self.response.out.write(template.render(path, template_values))

application = webapp.WSGIApplication(
                                     [('/', MainPage)],
                                     debug=True)

def main():
    run_wsgi_app(application)

if __name__ == "__main__":
    main()
