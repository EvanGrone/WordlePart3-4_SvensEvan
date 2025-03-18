import flask
from flask import Flask, request, render_template, send_from_directory
import os
import argparse

app = flask.Flask(__name__, static_folder='public') 

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(ROOT_DIR, 'public')
print(PUBLIC_DIR)

def handle_template(filename):
    # Set default parameters
    parameters = {
        "max_guesses": int(request.args.get("max_guesses", 6)),
        'answer': 'SCARY',
        'guesses': ['STEAM','SOUND','SCRAP']
    }

    # Override the defaults with any values from the query string
    parameters.update(flask.request.args)
    parameters['max_guesses'] = int(parameters['max_guesses']) # Ensure max_guesses is an integer

    return flask.render_template(f"{filename}.html", **parameters)

@app.route('/<path:filename>')
def serve_files_and_templates(filename):
    # Check if the route is a template or static file
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
