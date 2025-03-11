import flask
# from flask import Flask, request, render_template, send_from_directory
import os
import argparse

app = flask.Flask(__name__)

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(ROOT_DIR, 'public')
print(PUBLIC_DIR)

def handle_template(filename):

        # Set default parameters
        parameters = {
            'max_guesses': 6,
            'answer': 'SCARY',
            'guesses': 'STEAM,SOUND,SCRAP,SCARY'
        }

        # Override the defaults with any values from the query string
        parameters.update(flask.request.args)

        # Turn the string of guesses into a list
        parameters['guesses'] = parameters['guesses'].split(',')

        return flask.render_template(f"{filename}.j2", **parameters)

@app.route('/<path:filename>')
def serve_files_and_templates(filename):
    
    # if the route does not contain an extension (i.e., a '.')
    # assume it is a template. Otherwise, just serve it as a 
    # static file.
    if not '.' in filename:
        return handle_template(filename)
    else:
        return flask.send_from_directory(PUBLIC_DIR, filename)

@app.route('/')
def root_route():
    return "No root route defined."

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Run a Flask server to serve files from the public directory.')
    parser.add_argument('--port', '-p', type=int, default=5000, help='Port to run the server on (default: 5000)')
    args = parser.parse_args()

    app.run(debug=True, port=args.port)


  